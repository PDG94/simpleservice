import "../Services/services.css";
import { CardsContainer, NavBar, Footer, SearchBar } from "../index";

const Services = () => {
  return (
    <div className="main">
      <div className="navSearch">
      <NavBar /> 
      <SearchBar />
      </div>
      <CardsContainer />
      <Footer />
    </div>
  );
};

export default Services;
