import React from "react";
import { Route,Routes } from "react-router-dom";
import AddService from "../Admin/addService/AddService";
import Dashboard from "../Admin/dashboard/Dashboard";
import NavBarAdmin from "../Admin/navBarAdmin/NavBarAdmin";
import Orders from "../Admin/orders/Orders";
import ViewServices from "../Admin/viewServices/ViewServices";
 

export default function Admin(){
    return(
        <div className='admin'>
        <div className='navbar'>
      <NavBarAdmin/>
        </div>
        <div className='content'>
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="addservice" element={<AddService />} />
            <Route path="orders" element={<Orders />} />
            <Route path="allservices" element={<ViewServices/>} />
          </Routes>
        </div>
      </div>
    );
  };