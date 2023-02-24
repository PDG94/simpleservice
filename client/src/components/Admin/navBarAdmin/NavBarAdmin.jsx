import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../navBarAdmin/navBarAdmin.css'
import logo from '../../Imagenes/logos.ico' 


export default function NavBarAdmin() {
  const name = useSelector((state) => state.useName);
  return (
    <div className="navbar" >
      <div className="user">
        <img className="logoAd" src={logo} width='80px'/>
        <hr/>
        <h4 className="nameAd">{name}</h4>
      </div>
      <nav className="navAd">
        <ul className="ulNav">
          <li className="homeadd">
            <Link to="/admin/home">Home</Link>
          </li>

          <li className="addSerAd">
            <Link to="/admin/add-service">Add Service</Link>
          </li>

          <li className="addCatAd">
            <Link to="/admin/add-categories">Add Categories</Link>
          </li>

          <li className="viewAd">
            <Link to="/admin/all-services">View Services</Link>
          </li>

          <li className="orderAd">
            <Link to="/admin/orders">Orders</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
