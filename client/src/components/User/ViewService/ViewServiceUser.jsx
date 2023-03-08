import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { NavBarUser } from "../../index.js";
import "../ViewService/viewServiceUser.css";

export default function ViewServiceUser() {
  const { id } = useParams();
  const serviceUser = useSelector((state) => state.users.serviceUser);

  function filterById(id) {
    return serviceUser.Cards.findIndex((item) => item.id === id);
  }

  const index = filterById(id);

  return (
    <div className="mainBoxViewServiceUser">
      <NavBarUser />
      <div className="">
        <Link to={"/profile/my-servicesdetail"}>
          <button className="backCr">Back</button>
        </Link>
        <div className="containerServiceViewUser">
          <h1 className="titleServiceView">My Service Info</h1>
          <span className="spanTitle">Service Name</span>
          <p className="pviewSer"> {serviceUser.Cards[index].servicename}</p>
          <hr
            style={{
              color: "#ffff",
              height: "3px",
              width: "60%",
              marginLeft: "20%",
            }}
          />

          <span className="spanTitle">Price</span>
          <p className="pviewSer"> $ {serviceUser.Cards[index].price}</p>
          <hr
            style={{
              color: "#ffff",
              height: "3px",
              width: "60%",
              marginLeft: "20%",
            }}
          />

          <span className="spanTitle">Description</span>
          <p className="pviewSer"> {serviceUser.Cards[index].description}</p>
          <hr
            style={{
              color: "#ffff",
              height: "3px",
              width: "60%",
              marginLeft: "20%",
            }}
          />
          <hr
            style={{
              color: "#ffff",
              height: "3px",
              width: "60%",
              marginLeft: "20%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
