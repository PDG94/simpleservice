import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";


export default function Landing(){

    return(
        <div className="landing">
      <h1>WELCOME.</h1>
      <Link to="/home">
        <button>Get into</button>
      </Link>
    </div>
    )
}