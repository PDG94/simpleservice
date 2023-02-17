import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";
import landing from "../Imagenes/landing.png"

export default function Landing(){

    return(
        <div className="landing">
          <Link to="/home">
          <button>GO</button>
        </Link>
        </div>
    );
  }