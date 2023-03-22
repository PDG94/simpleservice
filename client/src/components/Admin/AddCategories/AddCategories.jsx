import React from "react";
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../AddCategories/addcategories.css";
import imagenCat from "../AddCategories/addcategories.png";

export default function AddCategories() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const validate = (form) => {
    let errors = {};
    if (!form.name) {
      errors.name = "Name is required";
    } else if (form.name.length > 30) {
      errors.name = "Name is too long";
    }

    return errors;
  };

  const error = validate(form);

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (Object.values(error).length) {
      return alert(Object.values(error).join("\n"));
    }
    axios.post(
      "https://simpleservice-production.up.railway.app/admin/categories",
      form
    );
    navigate("admin/home");
  };

  return (
    <div className="fondoAdCat">
      <form onSubmit={submitHandler}>
        <div className="navCat">
          <NavBarAdmin />
        </div>
        <img className="imagencat" alt="imagen" src={imagenCat} width="700px" />
        <div className="containerAdCat">
          <h1>Create Categories</h1>
          <hr />
          <div>
            <p className="pCat">Add a New Category</p>
            <input
              className="inpAdCat"
              type="text"
              placeholder=" "
              value={form.name}
              onChange={changeHandler}
              name="name"
            />
            <p className="valid">{error.name}</p>
          </div>

          <div>
            <p className="pCat">Description</p>
            <input
              className="inpAdCat"
              type="text"
              placeholder=" "
              value={form.description}
              onChange={changeHandler}
              name="description"
            />
            <p>{error.description}</p>
            <button type="submit" className="subAdcat">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
