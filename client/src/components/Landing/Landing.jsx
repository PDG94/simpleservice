import React from "react";
import "./landing.css";
import landing from "../Imagenes/landing.mp4";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="main">
      <video src={landing} loop autoPlay muted />
      <div className="content">
        <Link to="/home" className="btnLanding">
          Visit Us
        </Link>
      </div>
    </div>
  );
}
