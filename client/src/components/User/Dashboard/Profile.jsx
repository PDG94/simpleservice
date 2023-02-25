import React from "react";

import NavBarUser from "../NavBarUser/NavBarUser";

export default function DashboardUser() {
  return (
    <div>
      <div>
        <a href="/home">Main menu</a>
      </div>
      <h1>Estoy en Home de User</h1>
      <div className="navbar">
        <NavBarUser />
      </div>
    </div>
  );
}