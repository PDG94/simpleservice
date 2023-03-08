import React from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./UpdateServices.css";
import { MdDescription } from "react-icons/md";
import { NavBarUser } from "../../index.js";
import { uploadCardFile } from "../../Firebase/config";
import { BsCloudArrowUp } from "react-icons/bs";

export default function UpdateServices() {
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem("token");

  const [form, setForm] = useState({
    description: "",
    price: "",
    filename: "",
  });

  const [file, setFile] = useState("");

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
    if (!isObjectEmpty(file)) {
      finalForm.serviceimage = await uploadCardFile(file, id);
    }

    return finalForm;
  };

  const isObjectEmpty = (objectName) => {
    return (
      objectName &&
      Object.keys(objectName).length === 0 &&
      objectName.constructor === Object
    );
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

  function changing(e) {
    try {
      var pdrs = document.getElementById("file-upService").files[0].name;
      document.getElementById("infoUpService").innerHTML = pdrs;
      setFile(e.target.files[0]);
      setForm({
        ...form,
        filename: e.target.files[0].name,
      });
    } catch (error) {
      //this is just to clean the console when you click the upload file on accident
    }
  }

  return (
    <form onSubmit={submitHandler} className="mainBoxViewServiceUser">
      <NavBarUser />
      <div>
        <Link to={"/profile/my-servicesdetail"}>
          <button className="backCr">Back</button>
        </Link>
        <div className="boxUpdateService">
          <h1 className="titleServiceUp">Update Service</h1>

          <div className="boxInpUserUp">
            <span className="spantitleUp">Update Description</span>
            <label className="iconUpUser">
              <MdDescription />
            </label>
            <input
              className="inpUpUser"
              type="text"
              placeholder="Description"
              value={form.description}
              name="description"
              onChange={(e) => handlerChange(e)}
            />
          </div>

          <div className="boxInpUserUp">
            <span className="spantitleUp">Update Price</span>
            <label className="iconUpUser">
              <MdDescription />
            </label>
            <input
              className="inpUpUser"
              type="text"
              placeholder="Price"
              value={form.price}
              name="price"
              onChange={(e) => handlerChange(e)}
            />
          </div>

          <div className="boxInpUserUp">
            <span className="spantitleUp">Add service image</span>
            <label htmlFor="file-upService" className="subirServiceImage">
              <BsCloudArrowUp className="iconCloud" />
              Upload Image
            </label>
            <input
              id="file-upService"
              onChange={(e) => changing(e)} //file input
              type="file"
              style={{ display: "none" }}
            />
            <div id="infoUpService"></div>
          </div>
          <button type="submit" className="subUpService">
            SUBMIT
          </button>
        </div>
      </div>
    </form>
  );
}
