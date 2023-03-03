import "../Home/home.css";
import React from "react";
import woodworker from "../Imagenes/woodworker.jpg";
import doctor from "../Imagenes/doctor.jpg";
import clothes from "../Imagenes/clothes.jpg";
import developer from "../Imagenes/developer.jpg";
import dogwalker from "../Imagenes/dogwalker.jpg";
import ss from "../Imagenes/ss.png";
import { NavBar, Footer } from "../index";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const nam1="pedro"
  const email1="ranekasd@gmail.com"
  const mail = async () => {
    console.log("mmmmmmail")
    const { data } = await axios.post(
      "https://simpleservice-production.up.railway.app/alta",
      {
        name: nam1,
        email: email1,
      }
    );
    console.log("maillllllll")
    console.log(data)
  }
  return (
    <div className="mainhome">
      <NavBar />
      <div className="homeContainer">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
          data-interval="200"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={doctor} className="d-block w-100 imagen" alt="doc" />
            </div>
            <div className="carousel-item">
              <img
                src={woodworker}
                className="d-block w-100 imagen"
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
            <div className="carousel-item">
              <img
                src={developer}
                className="d-block w-100 imagen"
                alt="clothing"
              />
            </div>
            <div className="carousel-item">
              <img
                src={dogwalker}
                className="d-block w-100 imagen"
                alt="clothing"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div className="contentHome">
          <div className="logoService">
            <div>
            <img src={ss} alt="carrito" className="imageLogo" />
            </div>
            <div>
            <Link className="servicesBtn" to="/Services">
              <button className="btnView">Visit our Services</button>
              
            </Link>
            </div>
          </div>
          <div className="phrase">
            <span className="phrasep">
              <b>Our customers said </b>
              <br />
              <br />
              <i>
                "It was so easy to find the perfect service when I needed it the
                most.
                <br />
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
