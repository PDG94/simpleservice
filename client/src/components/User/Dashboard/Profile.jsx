import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBarUser from "../NavBarUser/NavBarUser";
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

  return (
    <div className="fondoProf">
      <NavBarUser />
      <div>
        <span>
          <img src={profilepic} alt={`${userbio}'s profile pic`} width="500px" />
        </span>
        <span>
          <div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
            <div>Biography: {userbio}</div>
          </div>
          <ChartUsers/>
        </span>
      </div>
    </div>
  );
}
