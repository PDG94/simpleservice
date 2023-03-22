import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "../Edit/edit.css";
import { MdDescription } from "react-icons/md";
import { FiDollarSign } from "react-icons/fi";
import { getServiceList } from "../../../redux/actions/servicesActions";
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import { MdEditNote } from "react-icons/md";

export default function Create() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { CategoryId, id } = useParams();

  const serviceList = useSelector((state) => state.services.serviceList);
  const token = localStorage.getItem("token");

  useEffect(() => {
    category();
    dispatch(getServiceList(CategoryId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function category() {
    setForm({
      ...form,
      CategoryId: CategoryId,
    });
  }

  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    description: "",
    servicename: "", //con un select desde el estado global
    price: "",
  });

  const validate = (form) => {
    let errors = {};
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
    axios.put(
      `https://simpleservice-production.up.railway.app/admin/services/${id}`,
      form,
      { headers: { Authorization: "Bearer " + token } }
    );
    toast.success("Service update successfully!");
    navigate("/home");
  };

  const handleServicesList = (e) => {
    setForm({ ...form, servicename: e.target.value });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="navEdit">
        <NavBarAdmin />
      </div>
      <div className="formEdit">
        <div className="containerEdit">
          <h1 className="titleEdit">
            Update Service of User
            <MdEditNote className="iconEdit2" style={{ width: 200 }} />
          </h1>

          <span className="spantitleEdit">Select a service</span>
          <select className="selEdit" onChange={(e) => handleServicesList(e)}>
            <option value="all">Services</option>
            {serviceList?.map((elem) => (
              <option key={elem.id} value={elem.name}>
                {elem.name}
              </option>
            ))}
          </select>

          <div className="priceEdit">
            <label className="iconEdit">
              <FiDollarSign />
            </label>
            <input
              className="inpEdit"
              type="text"
              placeholder="Price"
              value={form.price}
              name="price"
              onChange={(e) => handlerChange(e)}
            />
            <p className="validEdit">{errors.price}</p>
          </div>

          <div>
            <label className="iconEdit">
              <MdDescription />
            </label>
            <input
              className="inpEdit"
              type="text"
              placeholder="Description"
              value={form.description}
              name="description"
              onChange={(e) => handlerChange(e)}
            />
            <p className="validEdit">{errors.description}</p>
          </div>
        </div>
      </div>
      <button type="submit" className="subEdit">
        SUBMIT
      </button>
    </form>
  );
}
