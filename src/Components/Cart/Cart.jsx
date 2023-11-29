import { Link, useLoaderData } from "react-router-dom";
import { FiDelete } from "react-icons/fi";
import img from '../../assets/nodata.png'
import { FcDonate } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa6";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";




const Cart = () => {
    
  const cart = useLoaderData();
  const [remaining, setRemaining] = useState(cart)

  
  const handleDelete=(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`http://localhost:5000/cart/${id}`)
            .then(data => {
                if(data.data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
                const afterDelete = cart.filter((items) => items._id !== id);
                setRemaining(afterDelete || [])
                
            })
          
          
        }
      });
  }
  return (
    <div className="container mx-auto">
        {
        cart.length==0?  <div className="grid justify-items-center">
        {" "}
        <img src={img} alt="" />
        <Link to='/'><button className="btn my-2 lg:my-0 md:absolute bottom-10 bg-purple-400 text-purple-900">Add <FcDonate /></button></Link>
      </div> :
          <div>
               <div className="flex items-center justify-center gap-2 font-extrabold text-5xl my-5">
            <h1>Donation List</h1>
            <FaRegHeart />

          </div>
          <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Donate</th>
          </tr>
        </thead>
        <tbody>
         
        {
        remaining.map((item, index)=> <tr key={item._id}>
            <th>
              {index+1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.picture} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{item.title}</div>
                 
                </div>
              </div>
            </td>
            <td>
              {item.category}
            </td>
            <td>{item.price}</td>
            <th>
              <button className="btn btn-ghost btn-lg" onClick={()=>handleDelete(item._id)}><FiDelete /></button>
            </th>
          </tr>
        )
        } 
        </tbody>
      </table>
    </div>
    
        </div>
    }

    </div>
  );
};

export default Cart;
