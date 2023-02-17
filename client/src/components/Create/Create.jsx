import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { NavBar, Footer } from "../index";

export default function Create() {
  const navigate = useNavigate();

  const serv = [
    "Web Full Stack Developer",
    "House cleaning",
    "Lawn care and landscaping",
    "Personal shopping and errand services",
    "Babysitting and childcare",
    "Dog walking and pet sitting",
    "Personal training and fitness coaching",
    "Developer",
    "Event planning and coordination",
    "Tutoring and academic coaching",
    "Meal planning and prep",
    "Photography and videography",
    "Frontend",
    "Graphic design and branding",
    "Social media management and marketing",
    "Copywriting and content creation",
    "Music lessons and instruction",
    "Language translation and interpretation",
    "Home renovation and repair services",
    "Elderly care and companionship",
    "BackEnd",
    "Business consulting and coaching",
    "Personal styling and wardrobe consulting",
    "Designer",
    "Tech support and computer repair",
  ];

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
    if (form.username.length < 2) {
      errors.username = "-Name must have at least 2 characters";
    }
    if (form.description.length < 15) {
      errors.description = "-Description must have at least 15 characters";
    }
    if (form.rating < 1 || form.rating > 5) {
      errors.rating = "-Rating must be between 1 and 5";
    }
    if (isNaN(form.rating)) {
      errors.rating = "-Rating must be a number";
    }
    if (isNaN(form.price)) {
      errors.price = "-Price must be a number";
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
      <Link to={"/Home"}>
        <button>Back</button>
      </Link>

      <div>
        <label>Username: </label>
        <input
          type="text"
          value={form.username}
          onChange={changeHandler}
          name="username"
        />
        <p>{error.username}</p>
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
        <label>Rating: </label>
        <input
          type="text"
          value={form.rating}
          onChange={changeHandler}
          name="rating"
        />
        <p>{error.rating}</p>
      </div>

      <div>
        <label>Price: </label>
        <input
          type="text"
          value={form.price}
          onChange={changeHandler}
          name="price"
        />
        <p>{error.price}</p>
      </div>

      <div>
        <label>Service: </label>
        <input
          type="text"
          value={form.servicename}
          onChange={changeHandler}
          name="servicename"
        />
        <p>{error.servicename}</p>
      </div>

      <div>
        <label>Url img: </label>
        <input
          type="text"
          value={form.userimage}
          onChange={changeHandler}
          name="userimage"
        />
      </div>

      <button type="submit">SUBMIT</button>
      <Footer />
    </form>
  );
}
