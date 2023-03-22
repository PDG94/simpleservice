import React, { useState } from "react";
import { auth, uploadFile } from "../../components/Firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "../Pages/register.css";
import { MdOutlineAccountCircle } from "react-icons/md";
import { createdUser /*, storeToken*/ } from "../../redux/actions/usersActions";
import { Link } from "react-router-dom";
import { BsCloudArrowUp } from "react-icons/bs";
import axios from "axios";

export default function Register() {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsloading] = useState(false);
  const [file, setFile] = useState("");
  const navigate = useNavigate();

  function registerUser(event) {
    event.preventDefault();
    if (input.password !== input.cPassword) {
      toast.error("Password do not match."); // SI NO MATCHEAN LAS PASSWORD LANZO ERROR Y SETEO EL LOADING A TRUE
    }
    setIsloading(true);
    createUserWithEmailAndPassword(auth, input.email, input.password)
      .then(async (userCredential) => {
        // SI TODO MATCHEA SETEO EL LOADING A FALSE Y LO MANDO A LOGIN
        const user = userCredential.user;
        const token = await user.getIdToken();
        localStorage.setItem("token", token);

        const userId = auth.currentUser.uid;
        const profilepic = await uploadFile(file, userId);
        createdUser(input.username, input.name, token, profilepic); //dateOfBirth later

        setIsloading(false);
        try {
          await axios.post(
            "https://simpleservice-production.up.railway.app/alta",
            {
              name: input.name,
              email: input.email,
            }
          );
          toast.success("Registration Successful!");
          navigate("/Services");
        } catch (error) {
          console.log(error);
        }
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
    cPassword: "",
    email: "",
    dateOfBirth: "",
    filename: "",
  });

  let regExpPassword = /^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,64}$/;
  let regExpEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  let regExpName = /^[ÁÉÍÓÚA-Z][a-záéíóú]+(\s+[ÁÉÍÓÚA-Z]?[a-záéíóú]+)*$/;
  let regExpUsername = /^[a-zA-Z0-9-() .]+$/;
  let validFile = /.(?:jpg|jpeg|png|gif)/;

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
      errors.name = "Only names are accepted.";
    }
    if (input.email.length === 0) {
      errors.email = "Email is required.";
    } else if (!regExpEmail.test(input.email)) {
      errors.email = "I'm expecting an email address.";
    }
    if (!input.password) {
      errors.password = "Password required.";
    } else if (!regExpPassword.test(input.password)) {
      errors.password =
        "At least one capital letter, one lowercase letter, one digit, no blank spaces and 1 special character.";
    }
    if (input.password > 8 || input.password < 20) {
      errors.password = "Minimum 8 characters, maximum 20";
    }
    if (!input.dateOfBirth) {
      errors.dateOfBirth = "Date required.";
    }
    if (input.file && !validFile.test(input.file)) {
      errors.file = "I'm expexting a jpg, jpeg, png or gif file";
    }

    return errors; //la funcion validate devuelve el objeto errors, ya sea vacio o con alguna propiedad si es q encuentra un errors
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: [e.target.value],
      })
    );
  }

  function changing(e) {
    var pdrs = document.getElementById("file-upload").files[0].name;
    document.getElementById("info").innerHTML = pdrs;
    setFile(e.target.files[0]);
    setInput({
      ...input,
      filename: e.target.files[0].name,
    });
  }

  return (
    <div className="containerMain">
      <NavBar />
      {isLoading && <Loading />}
      <Link to={"/login"}>
        <button className="backRegister">Back to Login</button>
      </Link>
      <div className="containerRegister">
        <div className="headerRegister">
          <MdOutlineAccountCircle className="iconR" />
          <h1 className="titleRegister">Create New Account</h1>
        </div>
        <div className="formRegister">
          <form onSubmit={registerUser}>
            <div className="nameBox">
              <div className="username">
                <input
                  className="inp"
                  type="text"
                  placeholder="Username"
                  required
                  value={input.username}
                  name="username"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <p className="errP">{errors.username}</p>
              </div>
              <div className="nameAccount">
                <input
                  className="inp"
                  type="text"
                  placeholder="Name"
                  required
                  value={input.name}
                  name="name"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <p className="errP">{errors.name}</p>
              </div>
            </div>
            <div className="mailBox">
              <div className="mail">
                <input
                  className="inp"
                  type="email"
                  placeholder="E-mail"
                  required
                  value={input.email}
                  name="email"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <p className="errP">{errors.email}</p>

                <input
                  className="dateRegister"
                  type="date"
                  placeholder="Date of birth"
                  required
                  value={input.dateOfBirth}
                  name="dateOfBirth"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <p className="errP">{errors.dateOfBirth}</p>
              </div>
              <div className="pass">
                <input
                  className="inp"
                  type="password"
                  placeholder="Password"
                  required
                  value={input.password}
                  name="password"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <p className="errP">{errors.password}</p>
                <input
                  className="inp"
                  type="password"
                  placeholder="Confirm Password"
                  required
                  value={input.cPassword}
                  name="cPassword"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
            </div>

            <div className="dateBox">
              <div className="dateR">
                <label htmlFor="file-upload" className="subir">
                  <BsCloudArrowUp className="iconCloud" />
                  {"  "}Upload image
                </label>
                <input
                  id="file-upload"
                  onChange={(e) => changing(e)}
                  type="file"
                  style={{ display: "none" }}
                />
                <p className="errP">{errors.file}</p>
                <div id="info"></div>
              </div>
            </div>
            <button type="submit" className="submitRegister">
              Register
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
