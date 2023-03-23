import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./updateInfoUsers.css";
import { MdDescription } from "react-icons/md";
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import { getAllUsers } from "../../../redux/actions/usersActions";

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

  const token = localStorage.getItem("token");
  const users = useSelector((state) => state.users.allUsers);

  useEffect(() => {
    dispatch(getAllUsers());
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

  const submitHandler = async (event, id) => {
    event.preventDefault();

    const info = updateValidator();

    const userSelected = await axios.get(
      `https://simpleservice-production.up.railway.app/admin/users/${id}`,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );

    await axios.put(
      `https://simpleservice-production.up.railway.app/admin/users/${id}`,
      info,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );

    if (userSelected.data.active === true && info.active === false) {
      await axios.post("https://simpleservice-production.up.railway.app/baja", {
        name: userSelected.data.name,
        email: userSelected.data.email,
      });
    }

    if (userSelected.data.active === false && info.active === true) {
      await axios.post(
        "https://simpleservice-production.up.railway.app/active",
        {
          name: userSelected.data.name,
          email: userSelected.data.email,
        }
      );
    }
    toast.success("User update successfully!");
    navigate("/admin/home");
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
    <form className="formUpdate" onSubmit={(e) => submitHandler(e, form.id)}>
      <div className="navUpdat">
        <NavBarAdmin />
      </div>
      <div>
        <div className="containerUpdate">
          <h1 className="titleUpdate">Update User</h1>

          <span className="spantitleUpdate">Select a User</span>
          <select className="selUpdate" onChange={(e) => handleUser(e)}>
            <option value="">Users</option>
            {users?.map((elem) => (
              <option key={elem.id} value={elem.id}>
                {elem.name}
              </option>
            ))}
          </select>

          <div className="priceUpdate">
            <label className="iconUpdate">
              <MdDescription />
            </label>
            <input
              className="inpUpdate"
              type="text"
              placeholder="Name"
              value={form.name}
              name="name"
              onChange={(e) => handlerChange(e)}
            />
          </div>

          <div className="priceUpdate">
            <label className="iconUpdate">
              <MdDescription />
            </label>
            <input
              className="inpUpdate"
              type="text"
              placeholder="Username"
              value={form.username}
              name="username"
              onChange={(e) => handlerChange(e)}
            />
          </div>

          <div className="priceUpdate">
            <label className="iconUpdate">
              <MdDescription />
            </label>
            <input
              className="inpUpdate"
              type="text"
              placeholder="User Bio"
              value={form.userbio}
              name="userbio"
              onChange={(e) => handlerChange(e)}
            />
          </div>

          <div className="priceUpdate">
            <label className="iconUpdate">
              <MdDescription />
            </label>
            <input
              className="inpUpdate"
              type="text"
              placeholder="Profile Photo"
              value={form.profilepic}
              name="profilepic"
              onChange={(e) => handlerChange(e)}
            />
          </div>

          <span className="spantitleUpdate">Active</span>
          <select className="selUpdate" onChange={(e) => handleActive(e)}>
            <option>Default</option>
            {res?.map((elem) => (
              <option value={elem.option}>{elem.option}</option>
            ))}
          </select>

          <span className="spantitleUpdate">Admin</span>
          <select className="selUpdate" onChange={(e) => handleIsAdmin(e)}>
            <option>Default</option>
            {res?.map((elem) => (
              <option value={elem.option}>{elem.option}</option>
            ))}
          </select>
          <button type="submit" className="subUpdate">
            SUBMIT
          </button>
        </div>
      </div>
    </form>
  );
}
