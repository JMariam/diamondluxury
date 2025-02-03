import room1 from '../img/img4.webp'
import room3 from '../img/img5.webp'
import suite1 from '../img/img6.webp'
import suite2 from '../img/img7.webp'
import room2 from '../img/img8.webp'

const Choice = () => {
    return ( <div className="choice relative container mx-auto p-6">
         <p className="after text-sm color1 font-semibold">OUR CHOICE</p>
        <div className="flex flex-col md:flex-row md:items-center justify-between">
        <p className="text-2xl my-2 text-color1">The best rooms just for you</p>
        <p className="text-xs text-color3 md:w-1/2 lg:w-1/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere error ex recusandae ab sed accusantium voluptatem sunt ad, numquam animi.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3 mt-6">
            <img src={room1} alt="" className='md:h-[20rem] lg:h-[34rem] w-full'/>
            <img src={room3} alt="" className='md:col-span-2 w-full md:h-[20rem] lg:h-[34rem]'/>
            <img src={suite1} alt="" className='h-[20rem] w-full'/>
            <img src={suite2} alt="" className='h-[20rem] w-full'/>
            <img src={room2} alt="" className='h-[20rem] w-full'/>
        </div>
    </div> 
    );
}
 
export default Choice;