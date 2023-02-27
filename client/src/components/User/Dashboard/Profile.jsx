import React from "react";
import NavBarUser from "../NavBarUser/NavBarUser";
import '../../User/Dashboard/profile.css'


export default function DashboardUser() {
  return (
    <div className="fondoProf">
      <div>
        <a href="/home">Main menu</a>
      </div>
      <h1>Estoy en Home de User</h1>
      <div className="navbarprof">
        <NavBarUser />
      </div>
    </div>
  );
}