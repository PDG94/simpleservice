import React from "react";
import NavBarUser from "../NavBarUser/NavBarUser";
import "../../User/Dashboard/profile.css";

export default function DashboardUser() {
  return (
    <div className="fondoProf">
      <NavBarUser />
      <div>
        <h1>Estoy en Home de User</h1>
      </div>
    </div>
  );
}
