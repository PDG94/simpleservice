import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./UpdateInfo.css";
import { MdDescription } from "react-icons/md";
import NavBarUser from "../NavBarUser/NavBarUser";

export default function UpdateInfoUser() {
  const navigate = useNavigate();

  const token = useSelector((state) => state.token);
  console.log(token);

  const [form, setForm] = useState({
    name: "",
    username: "",
    userbio: "",
    profilepic: "",
  });

  console.log(form);

  function handlerChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const submitHandler = (event) => {
    event.preventDefault();

    axios.post("https://simpleservice-production.up.railway.app/user", form, {
      headers: { Authorization: "Bearer " + token },
    });
    toast.success("User update successfully!");
    navigate("/home");
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
