import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

    return ( 
    <div className="footer bg-color1 mt-4 mb-0">
        <div className="container mx-auto p-6 relative lg:px-32">
            <div className="flex gap-y-10 items-center justify-between text-color5 text-xs">
                <div className="flex flex-col gap-3">
                <Link to='/'><p className="logo text-xl">
                        Diamond Luxury
                    </p></Link>
                    <div className="flex gap-8">
                        <FaFacebook/>
                        <FaInstagram/>
                        <FaTwitter/>
                    </div>
                    <p>diamondluxury@gmail.com</p>
                </div>
                <div className="flex gap-10 md:gap-28">
                <div className="flex flex-col gap-4">
                    <p>LEARN MORE</p>
                    <div className="flex flex-col gap-2">
                        <p>Success About</p>
                        <p>Why Us?</p>
                        <p>How It Works</p>
                        <p>FAQs</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p>REASOURCES</p>
                    <div className="flex flex-col gap-2">
                        <p>Help center</p>
                         <Link to='/blog'><p>Blog</p></Link>
                        <p>Corner</p>
                        <p>Press center</p>
                        <p>About Us</p>
                    </div>
                </div>
                </div>
               
            </div>
        </div>
    </div>
     );
}
 
export default Footer;