import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// import "../Create/create.css";
import { MdDescription } from "react-icons/md";
import { FiDollarSign } from "react-icons/fi";
import { GrCircleAlert } from "react-icons/gr";
import { getCategories,getServiceList } from "../../../redux/actions";
import Footer from "../../Footer/Footer";

export default function Edit({currentServices}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams()
  

  const categories = useSelector((state) => state.categories);
  const serviceList = useSelector((state) => state.serviceList);
  const allServices = useSelector((state) => state.services);
  console.log(allServices);
  const token = useSelector((state) => state.token);
  const servicesEdit = allServices.find((item)=> item.id === id)
  console.log(servicesEdit);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getServiceList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    CategoryId: "", //con un select desde el estado global
    description: "",
    servicename: "", //con un select desde el estado global
    price: "",
  });

//   const [service, setService] = useState(()=>{
// const newState = detectForm(id,{...form},
//   servicesEdit
//   )
//   return newState
// });

// const detectForm=(e)=>{
// e.preventDefault();
// try {
//   price = service.price
// } catch (error) {
//   console.log(error);
// }
// }

  const validate = (form) => {
    let errors = {};
    if (form.description.length < 15) {
      errors.description = "Description must have at least 15 characters";
    }
    if (!form.price) {
      errors.price = "Price is required";
    } else if (isNaN(form.price)) {
      errors.price = "Price must be a number";
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
        [e.target.name]: [e.target.value],
      })
    );
  }

  // const detectForm=(e)=>{
  //   e.preventDefault()
  //   try {
      
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const submitHandler = (event) => {
    event.preventDefault();
    let error = Object.keys(validate(form));
    if (error.length !== 0 && !form.description && !form.price) {
      alert("Please, fill in the fields correctly");
      return;
    } else {
      axios.post(
        "https://simpleservice-production.up.railway.app/services",
        form,
        { headers: { Authorization: "Bearer " + token } }
      );
    }
    navigate("/home");
  };

  const handleCategory = (e) => {
    setForm({ ...form, CategoryId: e.target.value });
  };

  const handleServicesList = (e) => {
    setForm({ ...form, servicename: e.target.value });
  };

    return (
        <form >
          {/* <NavBar /> */}
          <div className="form">
            <Link to={"/Home"}>
              <button className="back">Back</button>
            </Link>
    
            <div className="containerCreated">
              <h1 className="titleCr">Edit Service</h1>
    
              <GrCircleAlert />
              <p>
                Atention see <Link to="/prohibited">prohibited</Link> list before
                posting.
              </p>
    
              <span className="spantitle">Select a category</span>
              <select onChange={(e) => handleCategory(e)}>
                <option value="all">Categories</option>
                {categories?.map((elem) => (
                  <option key={elem.id} value={elem.id}>
                    {elem.name}
                  </option>
                ))}
              </select>
    
              <span className="spantitle">Select a service</span>
              <select onChange={(e) => handleServicesList(e)}>
                <option value="all">Services</option>
                {serviceList?.map((elem) => (
                  <option key={elem.id} value={elem.name}>
                    {elem.name}
                  </option>
                ))}
              </select>
    
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
                  onChange={(e) => handlerChange(e)}
                />
                <p className="valid">{errors.price}</p>
              </div>
    
              <div>
                <label className="icon">
                  <MdDescription />
                </label>
                <input
                  type="text"
                  placeholder="Description"
                  value={form.description}
                  name="description"
                  onChange={(e) => handlerChange(e)}
                />
                <p className="valid">{errors.description}</p>
              </div>
            </div>
          </div>
          <button type="submit" className="sub">
            SUBMIT
          </button>
          <Footer /> 
        </form>
      );
    }