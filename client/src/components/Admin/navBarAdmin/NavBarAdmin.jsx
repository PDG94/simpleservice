import React from "react";
import { useSelector } from "react-redux";
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
    <div className="navbarAd">
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
            Home
          </Link>
          <br />
          <Link
            className="adservices"
            style={{ textDecoration: "none" }}
            to="/admin/add-service"
          >
            <MdAddCircle className="icNavDash"/>
            Add Service
          </Link>
          <br />
          <Link
            className="adcategories"
            style={{ textDecoration: "none" }}
            to="/admin/add-categories"
          >
            <MdCategory className="icNavDash"/>
            Add Categories
          </Link>
          <br />
          <Link
            className="adview"
            style={{ textDecoration: "none" }}
            to="/admin/all-services"
          >
            <MdOutlineVisibility className="icNavDash"/>
            View Services
          </Link>
          <br />
          <Link
            className="adorders"
            style={{ textDecoration: "none" }}
            to="/admin/orders"
          >
            <MdReorder className="icNavDash"/>
            Orders
          </Link>
        </div>
      </div>
    </div>
  );
}
