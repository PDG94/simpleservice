import "../Home/home.css";
import woodworker from "../Imagenes/woodworker.jpg";
import doctor from "../Imagenes/doctor.jpg";
import clothes from "../Imagenes/clothes.jpg";
import logoServiceName from "../Imagenes/logoServiceName.png";
import { NavBar, Footer } from "../index";

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
              <img
                src={woodworker}
                className="d-block w-100 imagen "
                alt="wood"
              />
            </div>
            <div className="carousel-item">
              <img
                src={clothes}
                className="d-block w-100 imagen"
                alt="clothing"
              />
            </div>
          </div>
        </div>
        <div className="contentHome">
          <div className="logoService">
            <img src={logoServiceName} alt="carrito" className="imageLogo" />
          </div>
          <div className="servicesBtn">
            <a className="btnView" href="/Services">
              View Our Services
            </a>
          </div>
          <div className="phrase">
            <span className="phrasep">
              <b>Our customers said </b>
              <br />
              <br />
              <i>
                "It was so easy to find the perfect service when I most needed.
                I definitely recommend it. <br />
                Thank you Simple Service" <br /> Rhonda.
              </i>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
