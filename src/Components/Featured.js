import room3 from '../img/room3.jpg';
import {FaArrowRight} from 'react-icons/fa'

const Featured = () => {
    return ( <div className="featured container mx-auto relative p-6">

<p className="after text-sm color1 lg:hidden my-6  font-semibold">FEATURED OFFER</p>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24">
            <img src={room3} alt="" className=''/>
            <div className="relative">
            <p className="after hidden lg:block text-sm color1  font-semibold">FEATURED OFFER</p>
            <p className="text-2xl my-2 text-color3">
                       Economy Luxe Room
                    </p>
                    <p className="hidden md:block text-xs text-color3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus optio consequatur quisquam officiis dolor ducimus, quae recusandae cupiditate labore magni quaerat, deleniti qui! Dolores dolor vel delectus, cum illum animi eligendi assumenda? Delectus ratione quam molestiae laudantium inventore voluptatem cum aspernatur mollitia quibusdam corporis quia harum, unde asperiores consectetur fugit fuga enim fugiat voluptas autem! Officiis accusamus praesentium quibusdam autem, nulla commodi dolor laudantium dignissimos sint? Quas, at consequuntur molestias natus nam animi, dolores itaque iure ab quos libero facilis omnis, aspernatur ipsam nemo voluptas unde provident illo! Laboriosam sint aspernatur eos vitae explicabo recusandae praesentium eum inventore quas ut ex architecto nesciunt voluptatem incidunt impedit minima sed voluptatum, magni odit atque quibusdam ipsam eaque fugit laudantium. Sint, quo! Modi?</p>
                    <p className="text-xs text-color3 md:hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit commodi omnis sint amet? Sint perferendis velit dolor pariatur ipsa at architecto atque, in minima odio quis, commodi voluptate officia aliquam blanditiis, ipsum praesentium? Quo sint voluptatibus tenetur laboriosam reprehenderit, rem nisi animi molestias veniam saepe sunt sapiente iusto nulla sed rerum odit? Quas dolore aut maxime? Officiis, veritatis, numquam modi voluptas nostrum veniam ex, molestias id eligendi repellendus nam animi.</p>
                    <div className="flex gap-3 py-6">
                        <div className="text-color1 border-r border-color1 p-3">
                            <p className='font-semibold'><span className='text-5xl lg:text-7xl'>25%</span> DISCOUNT</p>
                            <p className='py-2 font-bold '>STAY 6 MONTHS OR MORE</p>
                        </div>
                        <div className="text-color1 p-3">
                            <p className='font-semibold'><span className='text-5xl lg:text-7xl'>10%</span> DISCOUNT</p>
                            <p className='py-2 font-bold'>STAY 6 MONTHS OR MORE</p>
                        </div>
                    </div>
                    <p className="hover:scale-105 cursor-pointer bg-color1 p-2 text-color4 rounded text-xs flex gap-2 items-center w-fit">
                        Book Now <FaArrowRight/>
                    </p>
            </div>
        </div>
    </div> );
}
 
export default Featured;