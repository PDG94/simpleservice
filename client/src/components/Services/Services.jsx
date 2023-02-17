import "../Services/services.css";
import { CardsContainer, Filter, NavBar, Footer, Loading } from "../index";

const Services = () => {
  return (
    <div className="main">
      <NavBar/>
      <div className="filterService"><Filter/></div>
      <CardsContainer/>
      <Footer/> 
    </div>
  );
};

export default Services;