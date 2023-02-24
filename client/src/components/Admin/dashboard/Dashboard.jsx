import React from "react";
import NavBarAdmin from "../navBarAdmin/NavBarAdmin";

export default function Dashboard() {
  return (
    <div>
      <div>
        <a href="/home">Main menu</a>
      </div>
      <h1>Estoy en Home</h1>
      <div className="navbar">
        <NavBarAdmin />
      </div>
    </div>
  );
}
