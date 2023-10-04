import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Signup = () => {

    const { creatUser } = useContext(AuthContext)


    const handleSignup = e => {
        e.preventDefault();

        // const email = e.target.email.value;
        // const password = e.target.password.value;

        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        console.log(name, photo, email, password);

        creatUser(email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.error(error);
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-3xl text-center">Please Signup</h2>
                <form onSubmit={handleSignup} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Your photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Email address</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-white bg-[#403F3F]">Sign Up</button>
                    </div>
                </form>
                <p className="text-center mt-4">Already have an account? <Link className="text-red-500" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Signup;