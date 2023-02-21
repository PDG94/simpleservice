import React from "react";
import { Route, Routes } from "react-router-dom";
import AddService from "../Admin/addService/AddService";
import Home from "../Admin/Home/Home";
import NavBarAdmin from "../Admin/navBarAdmin/NavBarAdmin";
import Orders from "../Admin/orders/Orders";
import ViewServices from "../Admin/viewServices/ViewServices";

export default function Admin() {
  return (
    <div className="admin">
      <div className="navbar">
        <NavBarAdmin />
      </div>
      <div className="content">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="add-service" element={<AddService />} />
          <Route path="orders" element={<Orders />} />
          <Route path="all-services" element={<ViewServices />} />
        </Routes>
      </div>
    </div>
  );
}
