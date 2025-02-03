import Img1 from "../img/img3.webp";
import Img2 from "../img/img2.webp";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="about container mx-auto relative p-6 my-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="relative lg:w-4/5 lg:mt-48">
          <p className="after text-sm color1 font-semibold">ABOUT US</p>
          <p className="text-2xl my-2 text-color3">At Diamond Luxury Hotels</p>
          <p className="text-xs text-color3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            delectus vitae nesciunt praesentium unde libero assumenda dolores,
            quisquam commodi tenetur explicabo harum similique. Eius odit neque
            voluptatem sit porro expedita magnam laboriosam, a amet. Eveniet,
            sit amet ducimus nostrum deleniti, fugit dolorum quasi vero ipsam
            esse a! Voluptates porro sit placeat cum optio nobis voluptate quas
            voluptatem minus ad accusantium dolorum rerum at laboriosam illum,
            odit id qui corrupti magni? Officiis, a beatae ad consequuntur
            quidem id rerum voluptatem! Consequuntur.
          </p>
          <p className="hidden hover:scale-105 cursor-pointer bg-color1 p-2 text-color4 rounded text-xs lg:flex gap-2 items-center mt-10 w-fit">
            Read More <FaArrowRight />
          </p>
        </div>
        <div className="relative">
          <img src={Img1} alt="" className="lg:w-[38rem] lg:h-[33rem]" />
          <img
            src={Img2}
            alt=""
            className="absolute hidden lg:block lg:top-28 lg:-left-[25%] lg:w-[24rem] lg:h-[28rem]"
          />
        </div>
        <p className="lg:hidden hover:scale-105 cursor-pointer bg-color1 p-2 text-color4 rounded text-xs flex gap-2 items-center relative  w-fit">
          Read More <FaArrowRight />
        </p>
      </div>
    </div>
  );
};

export default About;
