import React from "react";
import "./landing.css";
import landing from "../Imagenes/landing.mp4";

export default function Landing() {
  return (
    <div className="main">
      <video src={landing} loop autoPlay muted />
      <div className="content">
        <a href="/home" className="btnLanding">
          Visit Us
        </a>
      </div>
    </div>
  );
}
