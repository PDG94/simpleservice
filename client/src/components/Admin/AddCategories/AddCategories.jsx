import React from "react";
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddCategories() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const validate = (form) => {
    let errors = {};
    if (!form.name) {
      errors.name = "name is required";
    } else if (form.name.length > 30) {
      errors.name = "name is too long";
    }
    if (form.description.length < 15) {
      errors.description = "Description must have at least 15 characters";
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
    <form onSubmit={submitHandler}>
      <div className="navbar">
        <NavBarAdmin />
      </div>

      <h1>Create Categories</h1>

      <div>
        <input
          type="text"
          placeholder="name "
          value={form.name}
          onChange={changeHandler}
          name="name"
        />
        <p className="valid">{error.name}</p>
      </div>

      <div>
        <input
          type="text"
          placeholder="Description"
          value={form.description}
          onChange={changeHandler}
          name="description"
        />
        <p>{error.description}</p>
      </div>

      <button>SUBMIT</button>
    </form>
  );
}
