import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./UpdateServices.css";
import { MdDescription } from "react-icons/md";
import NavBarUser from "../NavBarUser/NavBarUser";

export default function UpdateServices() {
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem("token");

  const [form, setForm] = useState({
    description: "",
    price: "",
    serviceimage: "",
  });

  function handlerChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const updateValidator = async () => {
    const finalForm = {};
    if (form.description.length > 0) {
      finalForm.description = form.description;
    }
    if (form.price.length > 0) {
      finalForm.price = form.price;
    }
    if (form.serviceimage.length > 0) {
      finalForm.serviceimage = form.serviceimage;
    }

    return finalForm;
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const info = await updateValidator();

    await axios.put(
      `https://simpleservice-production.up.railway.app/user/service/${id}`,
      info,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    toast.success("User update successfully!");
    navigate("/profile/my-servicesdetail");
  };

  return (
    <form onSubmit={submitHandler}>
      <NavBarUser />
      <div className="form">
        <div className="containerCreated">
          <h1 className="titleCr">Update Services</h1>

          <div className="priceC">
            <label className="icon">
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
          </div>

          <div className="priceC">
            <label className="icon">
              <MdDescription />
            </label>
            <input
              className="inpCreate"
              type="text"
              placeholder="Price"
              value={form.price}
              name="price"
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
              placeholder="Service Image"
              value={form.serviceimage}
              name="serviceimage"
              onChange={(e) => handlerChange(e)}
            />
          </div>
        </div>
      </div>
      <button type="submit" className="sub">
        SUBMIT
      </button>
    </form>
  );
}
