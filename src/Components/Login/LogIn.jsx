import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const LogIn = () => {
    return (
        <div>
             <div>
      <div>
        <div className="container mx-auto">
          <form className="card-body" >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                required
                placeholder="email"
                className="input input-bordered"
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                name="password"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <label className="label">
                <Link to="/registration">
                  {" "}
                  <a className="label-text-alt link link-hover">
                    Register Here
                  </a>
                </Link>
              </label>
            </div>
            <div className=" mt-6">
              <button className="btn outline-none border-none">Login</button>
            </div>
            <div className=" mt-6 flex ">
              <button className="btn  text-white  outline-none border-none">
                {" "}
                <FcGoogle></FcGoogle>{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
        </div>
    );
};

export default LogIn;