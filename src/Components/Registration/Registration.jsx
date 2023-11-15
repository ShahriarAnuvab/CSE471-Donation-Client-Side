import { Link } from "react-router-dom";

const Registration = () => {
    return (
        <div>
           <div className="container mx-auto">
            <div>
                <h1 className="text-3xl  text-center mt-5">Register Here</h1>
            </div>
             <form className="card-body"  >
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
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    className="input input-bordered"
                    name="name"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Photo Url"
                    className="input input-bordered"
                    name="photo"
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
                    <Link to="/Login">
                      {" "}
                      <a className="label-text-alt link link-hover">
                        Already Have an Account?
                      </a>
                    </Link>
                  </label>
                </div>
                <div className=" mt-6">
                  <button className="btn outline-none border-none">Register</button>
                </div>
                
              </form>
      </div>
        </div>
    );
};

export default Registration;