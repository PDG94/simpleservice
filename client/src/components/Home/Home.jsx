import Footer from "../Footer/Footer";
// import { CardsContainer } from "../index";
import woodworker from "../Imagenes/woodworker.jpg";
import doctor from "../Imagenes/doctor.jpg";
import clothes from "../Imagenes/clothes.jpg";
import "../Home/home.css";

const Home = () => {
  return (
    <div>
      {/* <CardsContainer /> */}
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={doctor} class="d-block w-100" alt="doc"/>
    </div>
    <div class="carousel-item">
      <img src={woodworker} class="d-block w-100" alt="wood"/>
    </div>
    <div class="carousel-item">
      <img src={clothes} class="d-block w-100" alt="clothing"/>
    </div>
  </div>
</div>
      <Footer />
    </div>
  );
};

export default Home;
