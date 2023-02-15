import "../Services/services.css";
import { CardsContainer, NavBar, Filter } from "../index";

const Services = () => {
  return (
    <div className="main">
      <div className="navBar"><NavBar /></div>
      <Filter/>
      <CardsContainer/>    
    </div>
  );
};

export default Services;