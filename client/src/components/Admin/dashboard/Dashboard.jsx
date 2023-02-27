import React from "react";
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import "../Dashboard/dashboard.css";
import { Link } from "react-router-dom";
import { MdDashboard, MdPerson, MdOutlineBorderColor } from "react-icons/md";

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
        <h1 className="hi">Hi, Admin!</h1>
        <main className="Menu">
          <div className="insights">
            <Link
              className="linkAd"
              style={{ textDecoration: "none" }}
              to="/admin/all-services"
            >
              <div className="services">
                <MdDashboard className="icDash" />
                <h2>Services</h2>
              </div>
              <div className="middle">
                <h3>Total Services</h3>
                <h1>500</h1>
                <div className="progress">
                  <svg className="circle">
                    <circle cx="48" cy="48" r="36"></circle>
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
            <Link
              className="linkAd"
              style={{ textDecoration: "none" }}
              to="/admin/all-users"
            >
              <div className="users">
                <MdPerson className="icDash1" />
                <h2>Users</h2>
              </div>
              <div className="middle">
                <h3>Total Users</h3>
                <h1>1850</h1>

                <div className="progress">
                  <svg className="circle1">
                    <circle cx="48" cy="48" r="36"></circle>
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
            <Link
              className="linkAd"
              style={{ textDecoration: "none" }}
              to="/admin/orders"
            >
              <div className="orders">
                <MdOutlineBorderColor className="icDash2" />
                <h2>Orders</h2>
              </div>
              <div className="middle">
                <h3>Total Orders</h3>
                <h1>$250</h1>
                <div className="progress">
                  <svg className="circle2">
                    <circle cx="48" cy="48" r="36"></circle>
                  </svg>
                  <div className="number">
                    <p>36%</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          {/*--------------------------------------------- */}
          <div className="recentOrder">
            <h2>Recent Orders</h2>
            <table className="tableOrd">
              <thead >
                <tr>
                  <th>User</th>
                  <th>Categorie</th>
                  <th>Service</th>
                  <th>Price</th>
                </tr>
                <br/>
              </thead>
              <tbody className="tbody">
                <tr>
                  <td>Luciana Heredia</td>
                  <td>Software Engineering</td>
                  <td>Front End</td>
                  <td>$2000</td>
                </tr>
                <tr>
                  <td>Jason Valderrama</td>
                  <td>Software Engineering</td>
                  <td>Full Stack Developer</td>
                  <td>$2000</td>
                </tr>
                <tr>
                  <td>Edwards Ardila</td>
                  <td>Software Engineering</td>
                  <td>Full Stack Developer</td>
                  <td>$2000</td>
                </tr>
                <tr>
                  <td>Ayelen Llampa</td>
                  <td>Software Engineering</td>
                  <td>Front End</td>
                  <td>$2000</td>
                </tr>
                <tr>
                  <td>Magali Diaz</td>
                  <td>Software Engineering</td>
                  <td>Full Stack Developer</td>
                  <td>$2000</td>
                </tr>
                <tr>
                  <td>Pedro Gonzalez</td>
                  <td>Software Engineering</td>
                  <td>Back End</td>
                  <td>$2000</td>
                </tr>
                <tr>
                  <td>Christian Rosero</td>
                  <td>Software Engineering</td>
                  <td>Back End</td>
                  <td>$2000</td>
                </tr>
                <tr>
                  <td>Jose Baldor</td>
                  <td>Software Engineering</td>
                  <td>Back End</td>
                  <td>$2000</td>
                </tr>
              </tbody>
            </table>
            <Link className="ViewOrders" to='/admin/orders'>View More</Link>
          </div>
        </main>
      </div>
    </div>
  );
}
