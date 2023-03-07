import React, { useEffect, useState } from "react";
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import "../Dashboard/dashboard.css";
import { Link } from "react-router-dom";
import { MdPerson, MdMiscellaneousServices } from "react-icons/md";
import useFetchCollection from "../../CustomHooks/UseFetchCollection";
import { useDispatch, useSelector } from "react-redux";
import { adminMetrics } from "../../../redux/actions/miscActions";
import {
  calcOrdersAmount,
  storeOrders,
} from "../../../redux/actions/ordersActions";
import { InfoBox } from "../InfoBox/InfoBox";
import { AiFillDollarCircle } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { FcServices } from "react-icons/fc";
import ChartAdmin from "../ChartAdmin";
import ChartAdminUser from "../ChartAdminUsers";
import ChartAdminServices from "../ChartAdminServices";

export default function Dashboard() {
  const dispatch = useDispatch();
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

  useEffect(() => {
    dispatch(adminMetrics(token));
    dispatch(storeOrders(data));
    dispatch(calcOrdersAmount(calculateOrdersAmount()));
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
            </Link>
          </div> */}
          <div className="graficas">
            <ChartAdmin />
            <ChartAdminUser />
            <ChartAdminServices />
          </div>
        </main>
      </div>
    </div>
  );
}
