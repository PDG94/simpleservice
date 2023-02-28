import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./updateInfoUsers.css";
import { MdDescription } from "react-icons/md";
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import { getUsers } from "../../../redux/actions";

export default function UpdateProfilesUsers() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const res = [
    {
      option: "true",
    },
    {
      option: "false",
    },
  ];

  const token = useSelector((state) => state.token);
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [form, setForm] = useState({
    id: "",
    name: "",
    username: "",
    userbio: "",
    profilepic: "",
    active: "",
    isAdmin: "",
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
    if (form.active.length > 0) {
      if (form.active === "true") {
        finalForm.active = true;
      }
      if (form.active === "false") {
        finalForm.active = false;
      }
    }
    if (form.isAdmin.length > 0) {
      if (form.isAdmin === "true") {
        finalForm.isAdmin = true;
      }
      if (form.isAdmin === "false") {
        finalForm.isAdmin = false;
      }
    }

    return finalForm;
  };

  const submitHandler = (event, id) => {
    event.preventDefault();

    const info = updateValidator();

    axios.put(
      `https://simpleservice-production.up.railway.app/user/${id}`,
      info,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    toast.success("User update successfully!");
    navigate("/home");
  };

  const handleActive = (e) => {
    setForm({ ...form, active: e.target.value });
  };

  const handleIsAdmin = (e) => {
    setForm({ ...form, isAdmin: e.target.value });
  };

  const handleUser = (e) => {
    setForm({ ...form, id: e.target.value });
  };

  return (
    <form onSubmit={(e) => submitHandler(e, form.id)}>
      <NavBarAdmin />
      <div className="form">
        <Link to={"/profile"}>
          <button className="back">Back</button>
        </Link>

        <div className="containerCreated">
          <h1 className="titleCr">Update User</h1>

          <span className="spantitle">Select a User</span>
          <select className="selCreate" onChange={(e) => handleUser(e)}>
            <option value="">Users</option>
            {users?.map((elem) => (
              <option key={elem.id} value={elem.id}>
                {elem.name}
              </option>
            ))}
          </select>

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

          <span className="spantitle">Active</span>
          <select className="selCreate" onChange={(e) => handleActive(e)}>
            <option>Default</option>
            {res?.map((elem) => (
              <option value={elem.option}>{elem.option}</option>
            ))}
          </select>

          <span className="spantitle">Admin</span>
          <select className="selCreate" onChange={(e) => handleIsAdmin(e)}>
            <option>Default</option>
            {res?.map((elem) => (
              <option value={elem.option}>{elem.option}</option>
            ))}
          </select>
        </div>
      </div>
      <button type="submit" className="sub">
        SUBMIT
      </button>
    </form>
  );
}
