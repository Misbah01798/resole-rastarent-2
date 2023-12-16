import { Helmet } from "react-helmet";
import Banner from "../Pages/Banner"
import FoodSection from "../Pages/FoodSection";
import Section from "../Pages/Section";
import Section3 from "../Pages/Section3";
import Footer from "./Footer";


const Home = () => {
  return (
    <div className="mt-8 top-20">
       <Helmet>
                <meta charSet="utf-8" />
                <title>Home - Resoles</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            
       <div className=" "> <Banner></Banner></div>
       <FoodSection></FoodSection>
        <Section></Section>
        <Section3></Section3>
       
    </div>
  )
}

export default Home;
