import React, { useEffect, useState } from "react";
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import "../Dashboard/dashboard.css";
import { Link } from "react-router-dom";
import { MdPerson, MdMiscellaneousServices } from "react-icons/md";
import useFetchCollection from "../../CustomHooks/UseFetchCollection";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import { adminMetrics } from "../../../redux/actions/miscActions";
import {
  calcOrdersAmount,
  storeOrders,
} from "../../../redux/actions/ordersActions";
=======
import {
  adminMetrics,
  calculateOrdersAmount,
  storeOrders,
} from "../../../redux/actions";
>>>>>>> 0cdebd0910deb50866d52293a29c1c8b02695857
import { InfoBox } from "../InfoBox/InfoBox";
import { AiFillDollarCircle } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { FcServices } from "react-icons/fc";
import ChartAdmin from "../ChartAdmin";
import ChartAdminUser from "../ChartAdminUsers";
import ChartAdminServices from "../ChartAdminServices";

export default function Dashboard() {
  const dispatch = useDispatch();
<<<<<<< HEAD
  const servicePercentage = useSelector(
    (state) => state.misc.servicePercentage
  );
  const totalServices = useSelector((state) => state.misc.totalServices);
  const usersPercentage = useSelector((state) => state.misc.usersPercentage);
  const totalUsers = useSelector((state) => state.misc.totalUsers);
  const token = localStorage.getItem("token");
  const orders = useSelector((state) => state.orders.orderHistory);
  const totalOrderA = useSelector((state) => state.orders.totalOrderAmount);
  const { data } = useFetchCollection("orders");
  // const allServices = useSelector((state) => state.services.services);

  const calculateOrdersAmount = () => {
    const array = [];
    orders.map((item) => {
      const { orderAmount } = item;
      return array.push(orderAmount);
    });
    const totalAmount = array.reduce((a, b) => {
      return a + b;
    }, 0);
    return totalAmount;
  };
=======
  const servicePercentage = useSelector((state) => state.servicePercentage);
  const totalServices = useSelector((state) => state.totalServices);
  const usersPercentage = useSelector((state) => state.usersPercentage);
  const totalUsers = useSelector((state) => state.totalUsers);
  const token = localStorage.getItem("token");
  const orders = useSelector((state) => state.orderHistory);
  const totalOrderA = useSelector((state) => state.totalOrderAmount);
  const { data } = useFetchCollection("orders");
  const allServices = useSelector((state) => state.services);
>>>>>>> 0cdebd0910deb50866d52293a29c1c8b02695857

  useEffect(() => {
    dispatch(adminMetrics(token));
    dispatch(storeOrders(data));
<<<<<<< HEAD
    dispatch(calcOrdersAmount(calculateOrdersAmount()));
=======
    dispatch(calculateOrdersAmount(data));
>>>>>>> 0cdebd0910deb50866d52293a29c1c8b02695857
  }, [dispatch, token, data]);

  //icons
  const earningIcons = <AiFillDollarCircle size={30} color="#006400" />;
  const serviceIcons = <FcServices size={30} />;
  const carticons = <HiShoppingCart size={30} color="#1e90ff" />;
  const userIcons = <MdPerson size={30} color="#34445" />;

  return (
    <div className="dashBo">
      <div className="navDash">
        <NavBarAdmin />
      </div>
      <div className="dashboard">
        <h1 className="hi">Hi, Admin!</h1>
        <main className="Menu">
<<<<<<< HEAD
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
                    tittle="Total Services"
                    count={totalServices}
                    icon={serviceIcons}
                  />
                </div>
                <div className="progress">
                  <svg className="circle">
                    <circle cx="48" cy="48" r="36"></circle>
                  </svg>
                  <div className="number">
                    <p>{servicePercentage.toFixed(2)}%</p>
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
                  tittle="Total Users"
                  count={totalUsers}
                  icon={userIcons}
                />

                <div className="progress">
                  <div className="number">
                    <p>{usersPercentage.toFixed(2)}%</p>
=======
          <div className="porcentajes">
            <div className="insights">
              <Link
                className="linkAd"
                style={{ textDecoration: "none" }}
                to="/admin/all-services"
              >
                <div className="services">
                  <MdMiscellaneousServices className="icDash2" />
                  <h2 className="h2Services">Services</h2>
                  <hr />
                  <p className="infobox">
                    <InfoBox tittle="Total Services" count={totalServices} />
                  </p>
                  <div className="circle1">
                    <div className="number1">
                      <p>{servicePercentage.toFixed(2)}%</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                className="linkAd"
                style={{ textDecoration: "none" }}
                to="/admin/all-users"
              >
                <div className="users">
                  <MdPerson className="icDash1" />
                  <h2 className="h2Users"> Users</h2>
                  <hr />
                  <p className="infobox2">
                    <InfoBox tittle="Total Users" count={totalUsers} />
                  </p>
                  <div className="progress">
                    <div className="circle2">
                      <div className="number2">
                        <p>{usersPercentage.toFixed(2)}%</p>
                      </div>
                    </div>
>>>>>>> 0cdebd0910deb50866d52293a29c1c8b02695857
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* ------------------------------------- */}
          {/* <div className="insights">
            <Link
              className="linkAd"
              style={{ textDecoration: "none" }}
              to="/admin/orders"
            >
            
                <MdOutlineBorderColor className="icDash2" />
                <div className="earning">
                  <h2>Earnings</h2>
<<<<<<< HEAD
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
=======
        <InfoBox
          tittle={"Total Earnings"}
          count={`$${totalOrderA}`}
          icon={earningIcons}
        />
        </div>
                <div className="orders">
                <h2>Orders</h2>
        <InfoBox
          tittle={"Total Orders"}
          count={orders.length}
          icon={carticons}
          
        />
        </div>
>>>>>>> 0cdebd0910deb50866d52293a29c1c8b02695857
            </Link>
          </div> */}
          <div className="graficas">
            <ChartAdmin />
            <ChartAdminUser />
            <ChartAdminServices />
          </div>
<<<<<<< HEAD
          <ChartAdmin />
          <ChartAdminUser />
          <ChartAdminServices />
=======
>>>>>>> 0cdebd0910deb50866d52293a29c1c8b02695857
        </main>
      </div>
    </div>
  );
}
