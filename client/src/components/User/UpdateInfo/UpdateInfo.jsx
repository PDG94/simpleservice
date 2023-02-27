import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./UpdateInfo.css";
import { MdDescription } from "react-icons/md";
import NavBarUser from "../NavBarUser/NavBarUser";
import { auth } from "../../Firebase/config.js";

export default function UpdateInfoUser() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token")
  const userID = useSelector((state) => state.userID)
  // console.log(userID)

  const [form, setForm] = useState({
    name: "",
    username: "",
    userbio: "",
    profilepic: "",
  });

  function handlerChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const updateValidator = () => {
    const finalForm = {};
    if (form.name.length > 0) {
      finalForm.name = form.name;
    }
    if (form.username.length > 0) {
      finalForm.username = form.username;
    }
    if (form.userbio.length > 0) {
      finalForm.userbio = form.userbio;
    }
    if (form.profilepic.length > 0) {
      finalForm.profilepic = form.profilepic;
    }
    return finalForm;
  };

  // const userId = auth.currentUser.uid;

  const submitHandler = async (event) => {
    event.preventDefault();

    const info = updateValidator();

    /* const response =  */await axios.put(
      `https://simpleservice-production.up.railway.app/user/${userID}`,
      info,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    toast.success("User update successfully!");
    // navigate("/home");
  };

  return (
    <form onSubmit={submitHandler}>
      <NavBarUser />
      <div className="form">
        <Link to={"/profile"}>
          <button className="back">Back</button>
        </Link>

        <div className="containerCreated">
          <h1 className="titleCr">Update User</h1>

          <div className="priceC">
            <label className="icon">
              <MdDescription />
            </label>
            <input
              className="inpCreate"
              type="text"
              placeholder="Name"
              value={form.name}
              name="name"
              onChange={(e) => handlerChange(e)}
            />
          </div>

          <div className="priceC">
            <label className="icon">
              <MdDescription />
            </label>
            <input
              className="inpCreate"
              type="text"
              placeholder="Username"
              value={form.username}
              name="username"
              onChange={(e) => handlerChange(e)}
            />
          </div>

          <div className="priceC">
            <label className="icon">
              <MdDescription />
            </label>
            <input
              className="inpCreate"
              type="text"
              placeholder="User Bio"
              value={form.userbio}
              name="userbio"
              onChange={(e) => handlerChange(e)}
            />
          </div>

          <div className="priceC">
            <label className="icon">
              <MdDescription />
            </label>
            <input
              className="inpCreate"
              type="text"
              placeholder="Profile Photo"
              value={form.profilepic}
              name="profilepic"
              onChange={(e) => handlerChange(e)}
            />
          </div>
        </div>
      </div>
      <button type="submit" className="sub">
        SUBMIT
      </button>
    </form>
  );
}
