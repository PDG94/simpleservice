import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {NavBar, Footer} from "../index";
export default function Create() {
  const navigate = useNavigate();

  /*   const serv = [
    "House cleaning",
    "Lawn care and landscaping",
    "Personal shopping and errand services",
    "Babysitting and childcare",
    "Dog walking and pet sitting",
    "Personal training and fitness coaching",
    "Event planning and coordination",
    "Tutoring and academic coaching",
    "Meal planning and prep",
    "Photography and videography",
    "Graphic design and branding",
    "Social media management and marketing",
    "Copywriting and content creation",
    "Music lessons and instruction",
    "Language translation and interpretation",
    "Home renovation and repair services",
    "Elderly care and companionship",
    "Business consulting and coaching",
    "Personal styling and wardrobe consulting",
    "Tech support and computer repair",
  ]; */

  const [form, setForm] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
  });

  const validate = (form) => {
    let errors = {};
    if (form.name.length < 2) {
      errors.name = "-Name must have at least 2 characters";
    }
    if (form.description.length < 15) {
      errors.description = "-Description must have at least 15 characters";
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
    axios.post("http://localhost:3001/services", form);
    navigate("/home");
  };

  return (
    <form onSubmit={submitHandler}>
    <NavBar/>
      <Link to={"/Catalog"}>
        <button>Back</button>
      </Link>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={form.name}
          onChange={changeHandler}
          name="name"
        />
        <p>{error.name}</p>
      </div>

      <div>
        <label>Description: </label>
        <input
          type="text"
          value={form.description}
          onChange={changeHandler}
          name="description"
        />
        <p>{error.description}</p>
      </div>

      <div>
        <label>Img: </label>
        <input
          type="text"
          value={form.img}
          onChange={changeHandler}
          name="img"
        />
      </div>

      <button type="submit">SUBMIT</button>
      <Footer/>
    </form>
   
  );
}
