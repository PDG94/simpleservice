import Footer from "../Footer/Footer";
import { NavBar } from "../index";
import woodworker from "../Imagenes/woodworker.jpg";
import doctor from "../Imagenes/doctor.jpg";
import clothes from "../Imagenes/clothes.jpg";
import logoServiceName from "../Imagenes/logoServiceName.png";
import "../Home/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mainhome">
      <NavBar />
      <div className="homeContainer">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img src={doctor} className="d-block w-100 imagen" alt="doc" />
          </div>
          <div className="carousel-item">
            <img src={woodworker} className="d-block w-100 imagen " alt="wood" />
          </div>
          <div className="carousel-item">
            <img src={clothes} className="d-block w-100 imagen" alt="clothing" />
          </div>
        </div>
      </div>
      <div className="logoService">
        <img src={logoServiceName} alt="carrito" className="imageLogo"/>
      </div>
      <div className="servicesBtn">
       <Link to="/Services">
          <button>View Services</button>
        </Link>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
