import React from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../NavBarAdmin/navBarAdmin.css";
import logo from "../../Imagenes/logoslila.ico";
import {
  MdHome,
  MdAddCircle,
  MdCategory,
  MdOutlineVisibility,
  MdReorder,
} from "react-icons/md";

export default function NavBarAdmin() {
  return (
    <div className="navbarAdmin">
      <div className="userAd">
        <img className="logoAd" src={logo} width="80px" alt="meaningful text" />
        <hr />
        <h4 className="nameAd">Simple Service</h4>
      </div>
      <div className="navAd1">
        <div className="divNavAd">
          <Link
            className="adhome"
            style={{ textDecoration: "none" }}
            to="/admin/home"
          >
            <MdHome className="icNavDash" />
            Dashboard
          </Link>
          <br />
          <Link
            className="adservices"
            style={{ textDecoration: "none" }}
            to="/admin/add-service"
          >
            <MdAddCircle className="icNavDash" />
            Add Service
          </Link>
          <br />
          <Link
            className="adcategories"
            style={{ textDecoration: "none" }}
            to="/admin/add-categories"
          >
            <MdCategory className="icNavDash" />
            Add Categories
          </Link>
          <br />
          <Link
            className="adview"
            style={{ textDecoration: "none" }}
            to="/admin/all-services"
          >
            <MdOutlineVisibility className="icNavDash" />
            View Services
          </Link>
          <br />
          <Link
            className="adorders"
            style={{ textDecoration: "none" }}
            to="/admin/orders"
          >
            <MdReorder className="icNavDash" />
            Orders
          </Link>
          <br className="brMenu"/>
          <Link
          className="mainMenu"
          style={{ textDecoration: "none" }}
          to="/home"
        >
          Back to Home
          </Link>
        </div>
      </div>
      {/* <div className="navbar"> POR QUÉ HAY DOS NAVBAR SI SOLO SE ESTÁ USANDO UNA?
      <div className="user">
        <img className="logoAd" src={logo} width="80px" alt="meaningful text" />
        <hr />
        <h4 className="nameAd">Simple Service</h4>
      </div>
      <nav className="navAd">
        <ul className="ulNav">
          <li className="homeadd">
            <Link to="/admin/home">Home</Link>
          </li>

          <li className="addSerAd">
            <Link to="/admin/update">Update Users</Link>
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
    </div> */}
    </div>
  );
}
