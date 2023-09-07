import { useState } from "react";
import { Link } from "react-router-dom";
import FaqEx from "./FaqEx";
import {data} from '../data';
import { FaArrowRight } from "react-icons/fa";

const Faq = () => {
    const [questions, setQuestions] = useState(data)
    return ( 
    <div className=" container mx-auto p-6 relative">
         <p className="after text-xl color1 font-semibold">FAQs</p>
              <p className="text-2xl my-2 text-color3">
                  Frequently Asked Questions
              </p>
              <p className="text-xs text-color3 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error id aliquid delectus hic ut porro ullam minima! Sint commodi accusamus officia, cupiditate illo autem quas expedita in eaque possimus. Et.</p>
                {questions.map((question) => {
                return <FaqEx key={question.id} {...question}/>
                }
                )}

                <div className="flex gap-4 items-center justify-center pt-10">
                    <p className="text-xs text-color1">Have more questions?</p>
                    <Link to='/contact'><p className="text-white bg-color1 p-2 text-xs flex items-center gap-4 cursor-pointer hover:scale-105">Contact Us <FaArrowRight/></p></Link>
                </div>
    </div> 
    );
}
 
export default Faq;