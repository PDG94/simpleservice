import React from "react";
import { uploadFile } from "../../Firebase/config";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./UpdateInfo.css";
import { MdDescription } from "react-icons/md";
import { NavBarUser } from "../../index.js";
import { BsCloudArrowUp } from "react-icons/bs";

export default function UpdateInfoUser() {
  const navigate = useNavigate();
  const customerEmail = useSelector((state) => state.users.email);
  const customerName = useSelector((state) => state.users.useName);
  const token = localStorage.getItem("token");
  const userID = useSelector((state) => state.users.userID);

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
    if (file && !isObjectEmpty(file)) {
      finalForm.profilepic = await uploadFile(file, userID);
    }
    return finalForm;
  };
  const isObjectEmpty = (objectName) => {
    return (
      objectName &&
      Object.keys(objectName).length === 0 &&
      objectName.constructor === Object
    );
  };

  function changing(e) {
    var pdrs = document.getElementById("file-up").files[0].name;
    document.getElementById("infoUp").innerHTML = pdrs;
    setFile(e.target.files[0]);
    setForm({
      ...form,
      filename: e.target.files[0].name,
    });
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    const info = await updateValidator();

    try {
      await axios.put(
        `https://simpleservice-production.up.railway.app/user/${userID}`,
        info,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );

      await axios.post("https://simpleservice-production.up.railway.app/dato", {
        name: customerName,
        email: customerEmail,
      });

      toast.success("User update successfully!");
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="upMainBox">
      <NavBarUser />
      <form className="updateFormUser" onSubmit={submitHandler}>
        <Link to={"/profile"}>
          <button className="backCr">Back</button>
        </Link>
        <div className="containerUpUser">
          <h1 className="titleUserUp">Update User</h1>

          <div className="boxInpUserUp">
            <span className="spantitleUp">Update name</span>
            <label className="iconUpUser">
              <MdDescription />
            </label>
            <input
              className="inpUpUser"
              type="text"
              placeholder="New Name"
              value={form.name}
              name="name"
              onChange={(e) => handlerChange(e)}
            />
          </div>

          <div className="boxInpUserUp">
            <span className="spantitleUp">Update username</span>
            <label className="iconUpUser">
              <MdDescription />
            </label>
            <input
              className="inpUpUser"
              type="text"
              placeholder="New Username"
              value={form.username}
              name="username"
              onChange={(e) => handlerChange(e)}
            />
          </div>

          <div className="boxInpUserUp">
            <span className="spantitleUp">Add a biography</span>
            <label className="iconUpUser">
              <MdDescription />
            </label>
            <input
              className="inpUpUser"
              type="text"
              placeholder="Add Bio"
              value={form.userbio}
              name="userbio"
              onChange={(e) => handlerChange(e)}
            />
          </div>

          <div className="boxInpUserUp">
            <span className="spantitleUp">Update profile image</span>
            <label htmlFor="file-up" className="subirUserImage">
              <BsCloudArrowUp className="iconCloud" />
              Upload New Image
            </label>
            <input
              id="file-up"
              onChange={(e) => changing(e)}
              type="file"
              style={{ display: "none" }}
            />
            <div id="infoUp"></div>
          </div>
          <button type="submit" className="subUpUser">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
