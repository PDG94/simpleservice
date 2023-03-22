import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getCategories } from "../../../redux/actions/miscActions";
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import { useSelector, useDispatch } from "react-redux";
import "../AddService/addService.css";
import adservice from "../AddService/addservice1.png";
// import { toast } from "react-toastify";

export default function AddService() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.misc.categories);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const [form, setForm] = useState({
    CategoryId: "",
    name: "",
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

  const handleCategory = (event) => {
    setForm({
      ...form,
      CategoryId: event.target.value,
    });
  };

  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validate({
        ...form,
        [event.target.name]: [event.target.value],
      })
    );
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios.post(
      "https://simpleservice-production.up.railway.app/admin/services",
      form
    );
    navigate("/admin/home");
  };

  return (
    <div className="AdSer">
      <form onSubmit={submitHandler}>
        <div className="navServ">
          <NavBarAdmin />
        </div>
        <div>
          <img
            className="imagenad"
            alt="adservice"
            src={adservice}
            width="700px"
          />
          <div className="containerAdSer">
            <h1>Add Service</h1>
            <hr />
            <div className="choose">
              <p>Choose Service Category</p>
              <select className="optAdSer" onChange={(e) => handleCategory(e)}>
                <option value="all">Categories</option>
                {categories?.map((elem) => (
                  <option key={elem.id} value={elem.id}>
                    {elem.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <p className="pService">Service Name</p>
              <input
                style={{ color: "#101010" }}
                className="inpAdSer"
                type="text"
                placeholder=" "
                value={form.name}
                onChange={(e) => handleInputChange(e)}
                name="name"
              />
              <p className="validAdSer">{errors.name}</p>
            </div>
            <button type="submit" className="subAdSer">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
