import About from "../Components/About";
import Choice from "../Components/Choice";
import Hero from "../Components/Hero";
import Featured from "../Components/Featured";
import Faq from "../Components/Faq"
import Services from '../Components/Services'

const Home = () => {
    return ( 
        <div className="">
            <Hero/>
            <About/>
            <Choice/>
            <Featured/>
            <Services/>
            <Faq/>
        </div>
     );
}
 
export default Home;