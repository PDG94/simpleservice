import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {NavBarUser, Footer} from "../../index.js";
import "../../User/Dashboard/profile.css";
import { getServiceUser } from "../../../redux/actions";
import ChartUsers from "./ChartUsers";

export default function DashboardUser() {
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  const id = useSelector((state) => state.userID);
  const { /* Cards, active, */ email, name, profilepic, userbio, username } =
    useSelector((state) => state.serviceUser);

  useEffect(() => {
    dispatch(getServiceUser(id, token));
  }, [dispatch, id, token]);

  // console.log(profilepic)

  return (
    <div className="fondoProf">
      <NavBarUser />
      <div className="backProf">
      <div className="boxProfile">
        
        <div className="imgBoxProfile">
          <img  className="imgProfile" src={profilepic} alt={`${userbio}'s profile pic`} />
          </div>
       
        
          <div className="dInfoPro">
            <span className="sBoxChart"><b>My Info</b></span>
            <br />
             <br/>
            <p className="pProfile">Name<br/> <b>{name}</b><hr /> </p>
            
            <p className="pProfile">Username<br/> <b>{username} <hr/></b> </p>
           <p className="pProfile">E-mail<br/> <b>{email}</b></p>
          </div>
          
  
          <div className="chartProf">
            <span className="sBoxChart"><b>Services</b></span>
            <br/>
          <ChartUsers className="chBProfile" width="50px"/>
        </div>
          <div className="bioProfile">
            <br/>
            <span className="sBoxChart"><b>About Me</b></span>
            <br />
            <br/>
            <p className="pProfileBio">{userbio}</p>
        </div>
          <div></div>
          <div></div>
        
      
        </div>
        </div>
      <Footer/>
    </div>
  );
}
