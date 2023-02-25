import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../NavBarUser/navBarUser.css";
import logo from "../../Imagenes/logos.ico";

export default function NavBarUser() {
  const name = useSelector((state) => state.useName);
  return (
    <div className="navbar">
      <div className="user">
        <img className="logoAd" src={logo} width="80px" alt="meaningful text" />
        <hr />
        <h4 className="nameAd">{name}</h4>
      </div>

      <nav className="navAd">
        <ul className="ulNav">
          <li className="homeadd">
            <Link to="/profile">Home</Link>
          </li>

          <li className="addSerAd">
            <Link to="/profile/update">Update Info</Link>
          </li>

          <li className="addSerAd">
            <Link to="/Create">Add Service</Link>
          </li>

          <li className="viewAd">
            <Link to="/profile/my-services">View Services</Link>
          </li>

          <li className="orderAd">
            <Link to="/profile/orders">Orders</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
