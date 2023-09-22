
import { useState } from 'react';
import {Link} from 'react-router-dom'
import {FaTimes, FaBars} from 'react-icons/fa';


const Header = () => {
   const [icon, setIcon] = useState(true)

    const openMenu = () =>{
       const menu = document.querySelector('.menu')
       const listItems = document.querySelectorAll('.listitem')

       menu.classList.toggle('open')
       setIcon(!icon)

       listItems.forEach((listItem) => listItem.addEventListener('click', () => {
        menu.classList.remove('open')
        setIcon(icon)
       })
       )
    }

    return ( 
        <header className="relative">
            <div className="container mx-auto p-6">
                <div className="flex justify-between align-center pt-6">
                    <div className="logo text-color1 text-xl">
                        Diamond Luxury
                    </div>
                    <div className="nav-items hidden text-sm space-x-10 items-center lg:flex">
                        
                        <Link to='/diamondluxury'className="text-md hover:scale-105">Home</Link>
                        <Link to='/diamondluxury/about' className="text-md hover:scale-105">About Us</Link>
                        <Link to='/diamondluxury/services' className="text-md hover:scale-105">Our Services</Link>
                        <Link to='/diamondluxury/blog' className="text-md hover:scale-105">Blog</Link>
                        <Link to='/diamondluxury/contact' className="text-md hover:scale-105">Contact Us</Link>
                        <Link to='/diamondluxury/book' className="text-sm bg-color1 text-white p-2 rounded hover:scale-105">Book Now</Link>
                    </div>




                    <div className="lg:hidden cursor-pointer text-xl text-color1" onClick={openMenu}>
                         {
                        icon ?
                         (
                            <FaBars/>
                        ) 
                        :
                        (
                           <FaTimes/>
                        ) 
                    }
                    </div>
                        <div className="menu absolute top-[-1000%] z-50 flex flex-col items-center bg-color4 py-6  w-[70%] ml-[9%] mr-[20%] rounded-lg lg:hidden">
                        <Link to='//diamondluxury'className="listitem text-color1 py-3 font-bold text-md hover:scale-105">Home</Link>
                        <Link to='/diamondluxury/about' className="listitem text-color1 py-3 font-bold text-md hover:scale-105">About Us</Link>
                        <Link to='/diamondluxury/services' className="listitem text-color1 py-3 font-bold text-md hover:scale-105">Our Services</Link>
                        <Link to='/diamondluxury/blog' className="listitem text-color1 py-3 font-bold text-md hover:scale-105">Blog</Link>
                        <Link to='/diamondluxury/contact' className="listitem text-color1 py-3 font-bold text-md hover:scale-105">Contact Us</Link>
                        </div>
                </div>
            </div>
            

        </header>
     );
}
 
export default Header;
