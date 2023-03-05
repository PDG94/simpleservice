import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { NavBar, Footer } from "../index";
import "../Create/create.css";
import { MdDescription } from "react-icons/md";
import { FiDollarSign } from "react-icons/fi";
import { FiAlertCircle } from "react-icons/fi";
import { getCategories, getServiceList } from "../../redux/actions";

export default function Create() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories);
  const serviceList = useSelector((state) => state.serviceList);
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    CategoryId: "", //con un select desde el estado global
    description: "",
    servicename: "", //con un select desde el estado global
    price: "",
  });

  const validate = (form) => {
    let errors = {};
    if (!form.CategoryId) {
      errors.CategoryId = "Select Category";
    }
    if (!form.servicename) {
      errors.servicename = "Select Service";
    }
    if (!form.price) {
      errors.price = "Price is required";
    } else if (isNaN(form.price)) {
      errors.price = "Price must be a number";
    }
    if (!form.description) {
      errors.description = "Description is required";
    } else if (form.description.length < 15) {
      errors.description = "Description must have at least 15 characters";
    }

    return errors;
  };

  function handlerChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
  }

  const error = validate(form);

  const submitHandler = (event) => {
    event.preventDefault();

    if (Object.values(error).length) {
      return toast.error(Object.values(error).join(", "));
    }
    axios.post(
      "https://simpleservice-production.up.railway.app/services",
      form,
      { headers: { Authorization: "Bearer " + token } }
    );
    toast.success("Service created successfully!");
    navigate("/home");
  };

  const handleCategory = (e) => {
    setForm({ ...form, CategoryId: e.target.value });
    dispatch(getServiceList(e.target.value));
  };

  const handleServicesList = (e) => {
    setForm({ ...form, servicename: e.target.value });
  };

  return (
    <form onSubmit={submitHandler} className="boxCreateForm">
      <NavBar />
      <div className="formCreate">
        <Link to={"/profile"}>
          <button className="backCr">Back to<br/> My Account</button>
        </Link>

        <div className="containerCreate">
          <h1 className="titleCre">Create Service</h1>
 
            <span className="cirB" ><FiAlertCircle size={30} /></span>
          <span className="circleBoX">
            {"  "}Atention
          </span>
          <p className="prohPhrase">
            See{" "}
            <Link
              to="/prohibited"
              className="proLink"
              style={{ textDecoration: "none" }}
            >
              prohibited
            </Link>{" "}
            list before posting.
          </p>

          <span className="spanTitle">Select a category</span>
          <select className="selCreate" onChange={(e) => handleCategory(e)}>
            <option className="opCreate" value="all">Categories</option>
            {categories?.map((elem) => (
              <option className="opCreate" key={elem.id} value={elem.id}>
                {elem.name}
              </option>
            ))}
          </select>

          <span className="spanTitle">Select a service</span>
          <select className="selCreate" onChange={(e) => handleServicesList(e)}>
            <option className="opCreate" value="all">Services</option>
            {serviceList?.map((elem) => (
              <option className="opCreate" key={elem.id} value={elem.name}>
                {elem.name}
              </option>
            ))}
          </select>

          <div className="priceC">
          <span className="spanTitle">Set a price</span>
            <label className="iconCr">
              <FiDollarSign />
            </label>
            <input
              className="inpCreate"
              type="text"
              placeholder="Price"
              value={form.price}
              // onChange={changeHandler}
              name="price"
              onChange={(e) => handlerChange(e)}
            />
            <p className="valid">{errors.price}</p>
          </div>

          <div>
          <span className="spanTitle">Provide a description</span>
            <label className="iconCr">
              <MdDescription />
            </label>
           
            <input
              className="inpCreate"
              type="text"
              placeholder="Description"
              value={form.description}
              name="description"
              onChange={(e) => handlerChange(e)}
            />
            <p className="valid">{errors.description}</p>
          </div>
      <button type="submit" className="subCr">
        SUBMIT
      </button>
        </div>
      </div>
      <Footer />
    </form>
  );
}
