import React from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { MdStar,MdPerson,MdDescription,MdOutlineHail,MdImage } from "react-icons/md";
import {FiDollarSign} from "react-icons/fi";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function AddService(){
const {id} = useParams()
const allServices = useSelector((state)=>state.services)

const findingId = allServices.find((item)=>item.id === id)
console.log(findingId);

    const [form, setForm] = useState({
        CategoryId: "",
        username: "",
        userimage: "",
        description: "",
        servicename: "",
        price: 0,
        rating: "",
      });

      setForm(()=>{
        const newState = detectForm(id,
          {...form},
          findingId
          )
          return newState
      })



function detectForm(id, f1, f2){
if(id === "ADD"){
  return f1
}else{
  return f2
}
}

function editService(){

}
      

      const navigate = useNavigate()
      const categories = useSelector((state)=>state.categories)
    
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

      const handleInputChange = (event) => {
        const {name,value} = event.target;
    
        setForm({ 
            ...form, 
            [name]: value });
      };

      const submitHandler = (event) => {
        event.preventDefault();
        console.log(form);
         if (Object.values(error).length) {
          return toast(Object.values(error).join("\n"));
          
        }
        axios.post(
          "https://simpleservice-production.up.railway.app/services",
          form
        );
        navigate("/home");
      };

    return(
        <div>
            <form onSubmit={detectForm(id, submitHandler,editService )}>
      <div className="form">
      <Link to={"/Home"}>
        <button className="back">Back</button>
      </Link>
      <div className="containerCreated">
<h2>{detectForm(id,"Add New Service" , "Edit Service")}</h2>
      <div >
      <label className="icon"><MdPerson/></label>
        <input
          type="text"placeholder="Username"
          value={form.username}
          onChange={(e) => handleInputChange(e)}
          name="username"
        />
        <p className="valid">{error.username}</p>
      </div>

      <div>
      <label className="icon"><MdDescription/></label>
        <input
          type="text"
          placeholder="Description"
          value={form.description}
          name="description"
          onChange={(e) => handleInputChange(e)}
        />
        <p className="valid">{error.description}</p>
      </div>

      <div>
      <label className="icon"><MdStar/></label>
        <input
          type="text"
          placeholder="Rating"
          value={form.rating}
          name="rating"
          onChange={(e) => handleInputChange(e)}
        />
        <p className="valid">{error.rating}</p>
      </div>

      <div>
      <label className="icon"><FiDollarSign/></label>
        <input
          type="text"
          placeholder="Price"
          value={form.price}
          name="price"
          onChange={(e) => handleInputChange(e)}
        />
        <p className="valid">{error.price}</p>
      </div>

      <div>
      <label className="icon"><MdOutlineHail/></label>
        <input
          type="text"
          placeholder="Service"
          value={form.servicename}
          name="servicename"
           onChange={(e) => handleInputChange(e)}
        />
        <p className="valid">{error.servicename}</p>
      </div>
      <div>
        <span>
            --Choose Service Category--
        </span>
        <select>
          <option value="all">Categories</option>
          {categories?.map((elem)=>(
            <option key={elem.id} value={elem.value}>
            {elem.name}
            </option>
          ))}
        </select>
      </div>
      </div>
      </div>
      <button type="submit" className="sub">{detectForm(id, "SUBMIT" , "Edit")}</button>
    </form>
        </div>
    )
}
