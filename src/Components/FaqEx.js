import {useState} from 'react'
import { FaPlus,  FaMinus}  from 'react-icons/fa'

const FaqEx = ({title, info }) => {
   
    const [show, setShow] = useState(false)

    return ( 
    <div className="">
        

            <div className="lg:px-20">
                <div className="faq border-b border-color1" >
                    <div className="flex justify-between text-color3 pb-4 pt-2">
                        <p className='text-xs'>{title}</p>
                        <p className='icon cursor-pointer text-xs ' onClick={() => setShow(!show)}>
                        {
                            show ? (<FaMinus/>) : (<FaPlus/>)
                        }
                        </p>
                    </div>
                    {show &&    <p className=" text-color3  text-xs pb-6">
                       {info}
                    </p>}
                 
                </div>
               
            </div>
    </div>
     );
}
 
export default FaqEx;