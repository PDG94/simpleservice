import React from "react";
import { useState } from "react";
import axios from "axios";
import { Form, Link, useNavigate } from "react-router-dom";
import { NavBar, Footer } from "../index";
import '../Create/create.css'
import { MdStar,MdPerson,MdDescription,MdOutlineHail,MdImage } from "react-icons/md";
import {FiDollarSign} from "react-icons/fi";
export default function Create() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    CategoryId: "0285f3e2-7875-40a6-a5ff-b199c2330808",
    username: "",
    userimage: "",
    description: "",
    servicename: "",
    price: "",
    rating: "",
  });

  const validate = (form) => {
    let errors = {};
    if (!form.username) {
      errors.username = "Userame is required";
    } else if (form.username.length > 30) {
      errors.username = "Userame is too long";
    }
    if (form.description.length < 15) {
      errors.description = "Description must have at least 15 characters";
    }
    if (form.rating < 1 || form.rating > 5) {
      errors.rating = "Rating must be between 1 and 5";
    }
    if (isNaN(form.rating)) {
      errors.rating = "Rating must be a number";
    }
    if (!form.price) {
      errors.price = "Price is required";
    } else if (isNaN(form.price)) {
      errors.price = "Price must be a number";
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
      "https://simpleservice-production.up.railway.app/services",
      form
    );
    navigate("/home");
  };

  return (
    <form onSubmit={submitHandler}>
      <NavBar />
      <div className="form">
      <Link to={"/Home"}>
        <button className="sub">Back</button>
      </Link>
      <div className="containerCreated">
<h1>CREATE</h1>
      <div >
      <label className="icon"><MdPerson/></label>
        <label >Username: </label>
        <input
          type="text"
          value={form.username}
          onChange={changeHandler}
          name="username"
        />
        <p className="valid">{error.username}</p>
      </div>

      <div>
      <label className="icon"><MdDescription/></label>
        <label>Description: </label>
        <input
          type="text"
          value={form.description}
          onChange={changeHandler}
          name="description"
        />
        <p className="valid">{error.description}</p>
      </div>

      <div>
      <label className="icon"><MdStar/></label>
        <label>Rating: </label>
        <input
          type="text"
          value={form.rating}
          onChange={changeHandler}
          name="rating"
        />
        <p className="valid">{error.rating}</p>
      </div>

      <div>
      <label className="icon"><FiDollarSign/></label>
        <label>Price: </label>
        <input
          type="text"
          value={form.price}
          onChange={changeHandler}
          name="price"
        />
        <p className="valid">{error.price}</p>
      </div>

      <div>
      <label className="icon"><MdOutlineHail/></label>
        <label>Service: </label>
        <input
          type="text"
          value={form.servicename}
          onChange={changeHandler}
          name="servicename"
        />
        <p className="valid">{error.servicename}</p>
      </div>

      <div>
      <label className="icon"><MdImage/></label>
        <label>Url img: </label>
        <input
          type="text"
          value={form.userimage}
          onChange={changeHandler}
          name="userimage"
        />
      </div>
      </div>
      </div>
      <button type="submit" className="sub">SUBMIT</button>
      <Footer />
    </form>
  );
}
