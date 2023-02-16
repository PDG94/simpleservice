import "../Services/services.css";
import { CardsContainer, Filter } from "../index";

const Services = () => {
  return (
    <div className="main">
      <div className="filterService"><Filter/></div>
      <CardsContainer/>    
    </div>
  );
};

export default Services;