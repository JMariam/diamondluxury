import {FaArrowRight} from 'react-icons/fa';
const Check = () => {
    return ( 
        <div className="check hidden  lg:flex flex-col lg:flex-row gap-4 justify-between items-center px-16 lg:mx-12 mx-auto bg-color1 w-96 md:w-[34rem] lg:w-[91vw] lg:h-16 -top-14 lg:-top-8 relative py-6 lg:py-3 rounded-lg lg:rounded-none">
            <div className="flex flex-col  items-center">
            <label className="text-color5 className='bg-transparent border-none outline-none'">Check in</label>
                <input type="date" name="" id="" className='bg-transparent border-none outline-none text-color5 text-sm' />
            </div>
            <div className="flex flex-col  items-center">
                <label className="text-color5">Check out</label>
                <input type="date" name="" id="" className='bg-transparent border-none outline-none text-color5 text-sm' />
            </div>
            <div className="flex flex-col  items-center">
               <label className="text-color5">Guest</label>
                <input type="number" name="" id=""  className='bg-transparent border-none outline-none text-color5 w-12 text-sm'/>
            </div>
            <p className="text-color5 text-sm flex h-10 px-4 border border-color5 items-center gap-4 cursor-pointer hover:scale-105">Check Availability <FaArrowRight/></p>
        </div>
     );
}
 
export default Check;