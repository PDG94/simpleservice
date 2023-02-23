import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../components/Firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "../Pages/register.css";
import { MdOutlineAccountCircle } from "react-icons/md";
import { createdUser, storeToken } from "../../redux/actions";
import { Link } from "react-router-dom";

export default function Register() {
  // const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({})
  // const [password, setPassword] = useState("");
  // const [cPassword, setcPassword] = useState("");
  // const [username, setUsername] = useState("");
  // const [name, setName] = useState("");
  // const [dateOfBirth, setDateOfBirth] = useState("");
  // const [image, setImage] = useState(""); //parece que esto no se está usando, lo comento por ahora
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function registerUser(event) {
    event.preventDefault();
    if (input.password !== input.cPassword) {
      toast.error("Password do not match."); // SI NO MATCHEAN LAS PASSWORD LANZO ERROR Y SETEO EL LOADING A TRUE
    }
    setIsloading(true);
    createUserWithEmailAndPassword(auth, input.email, input.password)
      .then((userCredential) => {
        // SI TODO MATCHEA SETEO EL LOADING A FALSE Y LO MANDO A LOGIN
        const user = userCredential.user;
        user.getIdToken().then((token) => {
          dispatch(storeToken(token));
          createdUser(input.username, input.name, token);//dateOfBirth later
        });
        // console.log(user);
        setIsloading(false);
        toast.success("Registration Successful!");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
        setIsloading(false);
      });
  }

  const [input, setInput] = useState({
    username: "",
    name: "",
    password: "",
    cPassword:"",
    email:"",
    dateOfBirth:""
  })


  let regExpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,20}$/;
  let regExpEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  let regExpName = /^[ÁÉÍÓÚA-Z][a-záéíóú]+(\s+[ÁÉÍÓÚA-Z]?[a-záéíóú]+)*$/;
  let regExpUsername = /^[a-zA-Z0-9-() .]+$/;

  function validate(input) {
    let errors = {};

    if (!input.username) {
      errors.username = "UserName is required.";
    } else if (!regExpUsername.test(input.username)) {
      errors.username =
       "Only letters, numbers, hyphens and parentheses are accepted.";
    }
    if (!input.name) {
      errors.name = "Name is required.";
    } else if (!regExpName.test(input.name)) {
      errors.name =
      "Only names are accepted."
    }
    if(input.email.length === 0){
      errors.email = "Email is required."
    }else if(!regExpEmail.test(input.email) ){
      errors.email = "I ' m expecting an email address."
    }
    if(!input.password){
      errors.password = "Password required."
    } else if(!regExpPassword.test(input.password)){
      errors.password="Minimum 8 characters,maximum 20. At least one capital letter, at least one lowercase letter at least one digit, no blank spaces, at least 1 special character."
    }
    if(!input.dateOfBirth){
      errors.dateOfBirth = "Date required."
    }
   

  
    return errors; //la funcion validate devuelve el objeto errors, ya sea vacio o con alguna propiedad si es q encuentra un errors
  }

  function handleChange(e){
    setInput({
      ...input, [e.target.name] : e.target.value
    })
    setErrors(
      validate({
        ...input, [e.target.name] : [e.target.value]
      })
    )
  }


  return (
    
    <div className="containerRe">
      <NavBar />
      {isLoading && <Loading />}
      <Link to={"/login"}>
          <button className="backRegister">Back</button>
        </Link>
      <div className="containerRegister">
        <div className="headerRegister">
          <MdOutlineAccountCircle className="iconR" />
          <h1 className="titleRegister">Create New Account</h1>
        </div>
        <div className="formRegister">
          <form onSubmit={registerUser}>
            <input
              className="inpRegister"
              type="text"
              placeholder="Username"
              required
              value={input.username}
              name= "username"
              // onChange={(event) => setUsername(event.target.value)}
              onChange={(e)=>{handleChange(e)}}
            />
            <p>{errors.username}</p>
            <input
              className="inpRegister"
              type="text"
              placeholder="Name"
              required
              value={input.name}
              name= "name"
              // onChange={(event) => setName(event.target.value)}
              onChange={(e)=>{handleChange(e)}}
            />
            <p>{errors.name}</p>
            <input
              className="inpRegister"
              type="email"
              placeholder="E-mail"
              required
              value={input.email}
              name="email"
              // onChange={(event) => setEmail(event.target.value)}
              onChange={(e)=>{handleChange(e)}}
            />
              <p>{errors.email}</p>
            <input
              className="inpRegister"
              type="password"
              placeholder="Password"
              required
              value={input.password}
              name="password"
              // onChange={(event) => setPassword(event.target.value)}
              onChange={(e)=>{handleChange(e)}}
            />
            <p>{errors.password}</p>
            <input
              className="inpRegister"
              type="password"
              placeholder="Confirm Password"
              required
              value={input.cPassword}
              name="cPassword"
              // onChange={(event) => setcPassword(event.target.value)}
              onChange={(e)=>{handleChange(e)}}
            />

            <input
              className="dateRegister"
              type="date"
              placeholder="Date of birth"
              required
              value={input.dateOfBirth}
              name="dateOfBirth"
              // onChange={(event) => setDateOfBirth(event.target.value)}
              onChange={(e)=>{handleChange(e)}}
            />
            <p>{errors.dateOfBirth}</p>
            <button type="submit" className="submitRegister">Sign up</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
