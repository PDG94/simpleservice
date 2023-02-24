import React from "react";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { getCategories } from "../../../redux/actions";
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import { useSelector, useDispatch } from "react-redux";
// import { toast } from "react-toastify";

export default function AddService(){
  
  const navigate = useNavigate()
  const dispatch= useDispatch();
  const categories = useSelector((state)=>state.categories)
  const [errors, setErrors] = useState({})
  
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


      const handleInputChange = (event) => {
        setForm({ 
            ...form, 
            [event.target.name]: event.target.value })
            
        setErrors(
            validate({
               ...form, [event.target.name] : [event.target.value]
              })
            )
      }

      const submitHandler = (event) => {
        event.preventDefault();
       
        axios.post(
          "https://simpleservice-production.up.railway.app/admin/services",
          form
        );
        navigate("/admin/home");
      };

    return(
        <div>
            <form onSubmit={submitHandler}>
            <div className="navbar">
        <NavBarAdmin />
      </div>
      <div>
      <div className="containerCreated">
      <div >
      <label className="icon"></label>
        <input
          type="text"
          placeholder="Service name"
          value={form.name}
          onChange={(e) => handleInputChange(e)}
          name="name"
        />
        <p className="valid">{errors.name}</p>
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
      <button type="submit" className="sub">Submit</button>
    </form>
        </div>
    )
}
