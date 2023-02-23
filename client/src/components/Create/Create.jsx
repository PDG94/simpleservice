import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { NavBar, Footer } from "../index";
import "../Create/create.css";
import {
  MdStar,
  MdPerson,
  MdDescription,
  MdOutlineHail,
  MdImage,
} from "react-icons/md";
import { FiDollarSign } from "react-icons/fi";
import { GrCircleAlert } from "react-icons/gr";
export default function Create() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({})
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
      errors.username = "Username is required";
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

  // const error = validate(form);

  // const changeHandler = (event) => {
  //   const property = event.target.name;
  //   const value = event.target.value;

  //   setForm({ ...form, [property]: value });
  // };

    function handlerChange(e){
      setForm({
        ...form, [e.target.name] : e.target.value
      })
      setErrors(
        validate({
          ...form,[e.target.name] : [e.target.value]
        })
      )
    }

  const submitHandler = (event) => {
    console.log(form);
    event.preventDefault();
    let error = Object.keys(validate(form))
    if(error.length !== 0 && !form.username && !form.description && !form.rating && !form.price){
      alert("Please, fill in the fields correctly");
        return;
    }else{
      axios.post(
        "https://simpleservice-production.up.railway.app/services",
        form
      );
      
    }
    // if (Object.values(error).length) {
    //   return alert(Object.values(error).join("\n"));
    // }
    navigate("/home");
  };

  return (
    <form onSubmit={submitHandler}>
      <NavBar />
      <div className="form">
        <Link to={"/Home"}>
          <button className="back">Back</button>
        </Link>
        <div className="containerCreated">
          <h1 className="titleCr">Create Service</h1>
          < GrCircleAlert/>
          <p>Atention see <Link to="/prohibited">prohibited</Link> list before posting.</p>

          <div>
            <label className="icon">
              <MdPerson />
            </label>
            <input
              type="text"
              placeholder="Username "
              value={form.username}
              // onChange={changeHandler}
              name="username"
              onChange={(e)=>handlerChange(e)}
            />
            <p className="valid">{errors.username}</p>
          </div>

          <div>
            <label className="icon">
              <MdDescription />
            </label>
            <input
              type="text"
              placeholder="Description"
              value={form.description}
              // onChange={changeHandler}
              name="description"
              onChange={(e)=>handlerChange(e)}
            />
            <p className="valid">{errors.description}</p>
          </div>

          <div>
            <label className="icon">
              <MdStar />
            </label>
            <input
              type="text"
              placeholder="Rating"
              value={form.rating}
              // onChange={changeHandler}
              name="rating"
              onChange={(e)=>handlerChange(e)}
            />
            <p className="valid">{errors.rating}</p>
          </div>

          <div>
            <label className="icon">
              <FiDollarSign />
            </label>
            <input
              type="text"
              placeholder="Price"
              value={form.price}
              // onChange={changeHandler}
              name="price"
              onChange={(e)=>handlerChange(e)}
            />
            <p className="valid">{errors.price}</p>
          </div>

          <div>
            <label className="icon">
              <MdOutlineHail />
            </label>
            <input
              type="text"
              placeholder="Service"
              value={form.servicename}
              // onChange={changeHandler}
              name="servicename"
              onChange={(e)=>handlerChange(e)}
            />
            <p className="valid">{errors.servicename}</p>
          </div>

          <div>
            <label className="icon">
              <MdImage />
            </label>
            <input
              type="text"
              placeholder="Url img"
              value={form.userimage}
              // onChange={changeHandler}
              name="userimage"
              onChange={(e)=>handlerChange(e)}
            />
          </div>
        </div>
      </div>
      <button type="submit" className="sub">
        SUBMIT
      </button>
      <Footer />
    </form>
  );
};