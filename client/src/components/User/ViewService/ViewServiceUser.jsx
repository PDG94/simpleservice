import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import NavBarUser from "../NavBarUser/NavBarUser";
import { auth } from "../../Firebase/config";
import { getServiceUser } from "../../../redux/actions";

export default function ViewServiceUser () {

  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  // console.log(token);

  const userId = auth.currentUser.uid

  
  // //  const data = axios.get(`https://simpleservice-production.up.railway.app/user/${userId}`,{
  // //     headers: { Authorization: "Bearer " + token }});
  const serviceUser = useSelector((state)=> state.serviceUser)
  console.log(serviceUser);

  useEffect(()=>{
    dispatch(getServiceUser(userId, token))
  }, [dispatch])

  return (
    <form>
      <NavBarUser />
      <div className="form">
        <Link to={"/profile"}>
          <button className="back">Back</button>
        </Link>

        <div className="containerCreated">
          <h1 className="titleCr">View My Services</h1>
          <h5>Service Name: {serviceUser.Cards?.map((e)=> e.servicename)}</h5>
          <h5>Price: $ {serviceUser.Cards?.map((e)=> e.price)}</h5>
          <h5>Description: {serviceUser.Cards?.map((e)=> e.description)}</h5>
         
        </div>
      </div>
      
    </form>
  );
}
