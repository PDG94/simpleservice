import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import NavBarUser from "../NavBarUser/NavBarUser";


export default function ViewServiceUser () {

  const {id} = useParams();
  const serviceUser = useSelector((state)=> state.serviceUser)
 



  function filterById(id){
    return serviceUser.Cards.findIndex((item) => item.id === id);
  };

  const index = filterById(id)
  

  return (
    <form>
      <NavBarUser />
      <div className="form">
        <Link to={"/profile/my-servicesdetail"}>
          <button className="back">Back</button>
        </Link>

        <div className="containerCreated">
          <h1 className="titleCr">View My Services</h1>
          <h5>Service Name: {serviceUser.Cards[index].servicename}</h5>
          <h5>Price: $ {serviceUser.Cards[index].price}</h5>
          <h5>Description: {serviceUser.Cards[index].description}</h5>
         
        </div>
      </div>
      
    </form>
  );
}
