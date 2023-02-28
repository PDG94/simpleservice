import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../NavBarUser/navBarUser.css";
import logo from "../../Imagenes/logos.ico";
import { FaUserCircle } from "react-icons/fa";

export default function NavBarUser() {
  const name = useSelector((state) => state.useName);
  return (
    <div className="navUserContainer">
      <div className="btnsUserProfile">
        <div className="birdyUser">
          <img
            className="userlogo"
            src={logo}
            width="40"
            alt="meaningful text"
          />
        </div>
        <div className="greetUser">
          <FaUserCircle size={28} />
          {"  "} Hi, {name}
        </div>

        <Link
          className="btnNavUser"
          to="/profile"
          style={{ textDecoration: "none" }}
        >
          My Account
        </Link>

        <Link
          className="btnNavUser"
          to="/profile/update"
          style={{ textDecoration: "none" }}
        >
          Update My Info
        </Link>

        <Link
          className="btnNavUser"
          to="/profile/my-services/:id"
          style={{ textDecoration: "none" }}
        >
          My Services
        </Link>
        <Link
          className="btnNavUser"
          to="/profile/my-servicesdetail"
          style={{ textDecoration: "none" }}
        >
          My Services List
        </Link>
        <Link
          className="btnNavUser"
          to="/profile/orders"
          style={{ textDecoration: "none" }}
        >
          My Orders
        </Link>
        <Link
          className="btnNavUser"
          to="/Create"
          style={{ textDecoration: "none" }}
        >
          Add Service
        </Link>
      </div>
      <div className="otherButton">
        <Link className="btnNavUser" to="/home">
          Main Menu
        </Link>
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
            <Link to="/profile/my-servicesdetail">View All Services</Link>
          </li>

          <li className="orderAd">
            <Link to="/profile/orders">Orders</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
