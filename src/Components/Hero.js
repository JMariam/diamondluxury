import {FaArrowRight} from 'react-icons/fa';

const Hero = () => {
    return ( 
        <div className="hero relative ">
            <div className="herobg">
            <div className="shadow flex flex-col justify-center items-center gap-8">
                <p className='text-white md:text-2xl text-xl'>GET LUXURY AND COMFORT</p>
                <p className='text-white font-bold  text-2xl lg:text-5xl md:text-3xl text-center w-4/5 md:w-3/5'>Welcome To The Place Where Luxury Meets Affordability</p>
                <p className="text-white border border-color5 p-2 flex items-center gap-4 cursor-pointer hover:scale-105">Explore Now <FaArrowRight/></p>
            </div>
            </div>
            
        </div>
     );
}
 
export default Hero;