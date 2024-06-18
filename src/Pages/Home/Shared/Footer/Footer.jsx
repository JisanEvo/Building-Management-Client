
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <div className=" text-white p-4">
            <footer className="footer footer-center p-10 bg-maroon text-base-content rounded">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Projects</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a><FaYoutube className="text-3xl text-red-600"></FaYoutube></a>
                        <a><FaFacebook className="text-3xl text-blue-600"></FaFacebook></a>
                        <a><FaTwitter className="text-3xl text-blue-400"></FaTwitter></a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © 2024 - All right reserved by Heaven Estate</p>
                </aside>
               <div className="flex ">
               <p >Developed By <a href="https://www.facebook.com/JisanEvo/"><span className="text-info font-bold">Jisan</span> </a></p>
               </div>
            </footer>
        </div>
    );
};

export default Footer;