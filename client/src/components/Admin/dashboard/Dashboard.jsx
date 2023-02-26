import React from "react";
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import "../Dashboard/dashboard.css";
import { Link } from "react-router-dom";
import { MdDashboard,MdPerson,MdOutlineBorderColor } from "react-icons/md";

export default function Dashboard() {
  return (
    <div className="dash">
      <div className="navbar">
        <NavBarAdmin />
      </div>
      <div className="dashboard">
        <Link
          className="mainMenu"
          style={{ textDecoration: "none" }}
          to="/home"
        >
          Main menu
        </Link>
        <h1>Hi, Admin!</h1>
        <main className="Menu">
          <div className="insights">
            <Link className="linkAd" style={{ textDecoration: "none" }} to='/admin/all-services'>
             <div className="services">
              <MdDashboard className="icDash"/>
              Services
            </div>
            <div className="middle">
                <h3>Total Services</h3>
                <h1>500</h1>
              <div className="progress">
                <svg className="circle">
                  <circle cx='48' cy='48' r='36'></circle>
                </svg>
                <div className="number">
                  <p>81%</p>
                </div>
              </div>
            </div>
            </Link>
           
          </div>
      {/* ------------------------------------- */}
          <div className="insights">
          <Link className="linkAd" style={{ textDecoration: "none" }} to='/admin/all-services'>

            <div className="users">
              <MdPerson className="icDash1"/>
              Users
            </div>
            <div className="middle">
              
                <h3>Total Users</h3>
                <h1>1850</h1>
              
              <div className="progress">
                <svg className="circle1">
                  <circle cx='48' cy='48' r='36'></circle>
                </svg>
                <div className="number">
                  <p>25%</p>
                </div>
              </div>
            </div>
            </Link>
          </div>
           {/* ------------------------------------- */}
           <div className="insights">
            <div className="users">
              <MdOutlineBorderColor className="icDash2"/>
              Orders
            </div>
            <div className="middle">
                <h3>Total Orders</h3>
                <h1>$250</h1>
              <div className="progress">
                <svg className="circle2">
                  <circle cx='48' cy='48' r='36'></circle>
                </svg>
                <div className="number">
                  <p>36%</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
