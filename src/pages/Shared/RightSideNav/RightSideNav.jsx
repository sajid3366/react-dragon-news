import { FaGoogle, FaTwitter, FaInstagram, FaGithub, FaFacebook } from 'react-icons/fa';
import qzone1 from "../../../assets/qZone1.png"
import qzone2 from "../../../assets/qZone2.png"
import qzone3 from "../../../assets/qZone3.png"



const RightSideNav = () => {
    return (
        <div>
            <div className='p-4'>
                <h2 className="text-3xl mb-5">Login With</h2>
                <button className="btn w-full btn-outline mb-3">
                    <FaGoogle className='mr-2'></FaGoogle>
                    Login with Google
                </button>
                <button className="btn w-full btn-outline">
                    <FaGithub className='mr-2'></FaGithub>
                    Login with Github
                </button>

            </div>

            <div className='mt-7'>
                <h2 className='text-3xl mb-5'>Find us on</h2>
                
                <a className="flex border rounded-t-lg p-4 items-center w-full">
                    <FaFacebook className='mr-2'></FaFacebook>
                    Facebook
                </a>
                <a className="flex border-x p-4 items-center w-full">
                    <FaTwitter className='mr-2'></FaTwitter>
                    Twotter
                </a>
                <a className="flex border rounded-b-lg p-4 items-center w-full">
                    <FaInstagram className='mr-2'></FaInstagram>
                    Instagram
                </a>
            </div>

            <div className='mt-7 bg-gray-200 p-4'>
                <h2 className='text-3xl mb-5'>Q-Zone</h2>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />

            </div>
        </div>
    );
};

export default RightSideNav;