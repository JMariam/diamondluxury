import  {ServiceData} from '../serviceData';
import { useState } from 'react';

const Services = () => {
  const [service, setService] = useState(ServiceData);
  const [value, setValue] = useState(0)

  const {name, images} = service[value]
    return ( 
        <div className="services relative p-6 container mx-auto">

            <p className="after text-sm color1 font-semibold">OUR SERVICES</p>
              <p className="text-2xl my-2 text-color3">
                  Check Our Hotel Gallery
              </p>
              <p className="text-xs text-color3 mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam cupiditate magnam, porro perferendis aliquid impedit optio eos eum laudantium nobis nihil repellendus error hic praesentium ex dolores, sunt nam, veritatis tenetur adipisci nulla consequatur beatae. Exercitationem non accusamus dicta expedita.</p>
              <div className="flex justify-between lg:justify-normal lg:gap-8 gap-1 items-center mb-2">
     {service.map((item, index) => (
    <button key={index} onClick={() => setValue(index)}  className={`text-xs text-color3 hover:border-b border-color1 py-2 ${
      index === value && "border-b border-color1"
    }`}>{item.name}</button>
))}
    </div>
        <div className="hidden md:grid grid-cols-3 gap-6">
        <img src={images.img1} className="h-[12rem] md:h-[22rem] w-full " alt='' />
            <img src={images.img2} className="h-[12rem] md:h-[22rem] w-full "  alt='' />
            <img src={images.img3} className="h-[12rem] md:h-[22rem] w-full " alt='' />
        </div>
        <div className="grid md:hidden grid-cols-2 gap-6">
        <img src={images.img1} className="h-[12rem] md:h-[22rem] w-full " alt='' />
        <img src={images.img3} className="h-[12rem] md:h-[22rem] w-full " alt='' />
        </div>
        
    </div>
     );
}
 
export default Services;