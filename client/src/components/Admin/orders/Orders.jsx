import React from "react";
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import '../Orders/orders.css'


export default function Orders() {
  return (
    <div className="fondoOrders">
      <h1 className="h1Orders">Orders</h1>
      <div className="navOrde">
        <NavBarAdmin />
      </div>
    </div>
  );
}
