import React from "react";
import { uploadFile } from "../../Firebase/config";
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

  const token = localStorage.getItem("token");
  const userID = useSelector((state) => state.userID);
  // console.log(userID)

  const [form, setForm] = useState({
    name: "",
    username: "",
    userbio: "",
    filename: "",
  });
  const [file, setFile] = useState("");

  function handlerChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const updateValidator = async () => {
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
    if (!isObjectEmpty(file)) {
      finalForm.profilepic = await uploadFile(file, userID);
    }
    return finalForm;
  };

  // const userId = auth.currentUser.uid;
  const isObjectEmpty = (objectName) => {
    return (
      objectName &&
      Object.keys(objectName).length === 0 &&
      objectName.constructor === Object
    );
  };

  function changing(e) {
    // var pdrs = document.getElementById("file-upload").files[0].name;
    // document.getElementById("info").innerHTML = pdrs;
    setFile(e.target.files[0]);
    setForm({
      ...form,
      filename: e.target.files[0].name,
    });
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    const info = await updateValidator();

    /* const response = */ await axios.put(
      `https://simpleservice-production.up.railway.app/user/${userID}`,
      info,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    toast.success("User update successfully!");
    navigate("/Services");
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
            {/* <input
              className="inpCreate"
              type="text"
              placeholder="Profile Photo"
              value={form.profilepic}
              name="profilepic"
              onChange={(e) => handlerChange(e)}
            /> */}
            <input
              // id="file-upload"
              onChange={(e) => changing(e)}
              type="file"
              // style={{ display: "none" }}
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
