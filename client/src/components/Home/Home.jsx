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
    <div>
      <NavBar />
      <div className="homeContainer">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img src={doctor} className="d-block w-100" alt="doc" />
          </div>
          <div className="carousel-item">
            <img src={woodworker} className="d-block w-100" alt="wood" />
          </div>
          <div className="carousel-item">
            <img src={clothes} className="d-block w-100" alt="clothing" />
          </div>
        </div>
      </div>
      <div className="logoService">
        <img src={logoServiceName} alt="carrito"/>
      </div>
      <Link to="/Services">
        <button className="btnService">View Services</button>
      </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
