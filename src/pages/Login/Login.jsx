import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault();

        // const email = e.target.email.value;
        // const password = e.target.password.value;
         
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');

        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);

                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                console.error('no user');
            })

    }



    return (
        <div>
            <Navbar></Navbar>

            <div>
                <h2 className="text-3xl text-center">Please Login</h2>
                <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Email address</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-white bg-[#403F3F]">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">Don't have an account? <Link className="text-red-500" to="/signup">Sign Up</Link></p>
            </div>


        </div>
    );
};

export default Login;