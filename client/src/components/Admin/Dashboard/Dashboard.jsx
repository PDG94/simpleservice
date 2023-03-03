import React, { useEffect, useState } from "react";
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import "../Dashboard/dashboard.css";
import { Link } from "react-router-dom";
import { MdPerson, MdOutlineBorderColor } from "react-icons/md";
import useFetchCollection from "../../CustomHooks/UseFetchCollection";
import { useDispatch, useSelector } from "react-redux";
import { adminMetrics, calculateOrdersAmount, storeOrders } from "../../../redux/actions";
import { InfoBox } from "../InfoBox/InfoBox";
import { AiFillDollarCircle } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { FcServices } from "react-icons/fc";
import ChartAdmin from "../ChartAdmin"
import ChartAdminUser from "../ChartAdminUsers";
import ChartAdminServices from "../ChartAdminServices";



export default function Dashboard() {
  const dispatch = useDispatch();
  const servicePercentage = useSelector((state) => state.servicePercentage);
  const totalServices = useSelector((state) => state.totalServices);
  const usersPercentage = useSelector((state) => state.usersPercentage);
  const totalUsers = useSelector((state) => state.totalUsers);
  const token = localStorage.getItem("token")
  const orders = useSelector((state)=>state.orderHistory)
  const totalOrderA = useSelector((state)=>state.totalOrderAmount)
  const {data} =  useFetchCollection("orders")
  const allServices = useSelector((state) => state.services);
 


  useEffect(() => {
    dispatch(adminMetrics(token));
    dispatch(storeOrders(data));
  dispatch(calculateOrdersAmount(data));
  }, [dispatch, token,data]);

  //icons
const earningIcons = <AiFillDollarCircle size={30}
color= '#006400'/>
const serviceIcons = <FcServices size={30} />
const carticons = <HiShoppingCart size={30} color='#1e90ff'/>
const userIcons = <MdPerson size={30} color='#34445' />


  return (
    <div className="dashBo">
      <div className="">
        <NavBarAdmin />
      </div>
      <div className="dashboard">
        <h1 className="hi">Hi, Admin!</h1>
        <main className="Menu">
        <div>
            <Link
              className="linkAd"
              style={{ textDecoration: "none" }}
              to="/admin/all-services"
            >
              <div className="square4">
                <h2>Services</h2>
              <div className="">
                <InfoBox
                 tittle= "Total Services"
                count ={totalServices}
                icon = {serviceIcons}
                />
                </div>
                <div className="progress">
                  <svg className="circle">
                    <circle cx="48" cy="48" r="36"></circle>
                  </svg>
                  <div className="number">
                    <p>{servicePercentage}%</p>
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
              <div className="square4">
                <MdPerson className="icDash1" />
                <h2>Users</h2>
                <InfoBox
                tittle= "Total Users"
                count ={totalUsers}
                icon={userIcons}
                />
             
                <div className="progress">
                  <div className="number">
                    <p>{usersPercentage}%</p>
                    
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
                <div className="square">
                  <h2>Earnings</h2>
        <InfoBox
          tittle={"Total Earnings"}
          count={`$${totalOrderA}`}
          icon={earningIcons}
        />
        </div>
                <div className="square3">
                <h2>Orders</h2>
        <InfoBox
          tittle={"Total Orders"}
          count={orders.length}
          icon={carticons}
          
        />
        </div>
                <div className="progress">
                  <svg className="circle2">
                    <circle cx="48" cy="48" r="36"></circle>
                  </svg>
                  <div className="number">
                    <p></p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <ChartAdmin/>
          <ChartAdminUser/>
          <ChartAdminServices/>
        </main>
      </div>
    </div>
  );
}
