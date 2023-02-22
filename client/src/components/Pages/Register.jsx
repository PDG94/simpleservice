import React, { useState } from "react";
import { auth } from "../../components/Firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "../Pages/register.css";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setcPassword] = useState("");
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  // const [image, setImage] = useState(""); //parece que esto no se está usando, lo comento por ahora
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();

  function registerUSer(event) {
    event.preventDefault();
    if (password !== cPassword) {
      toast.error("Password do not match."); // SI NO MATCHEAN LAS PASSWORD LANZO ERROR Y SETEO EL LOADING A TRUE
    }
    setIsloading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // SI TODO MATCHEA SETEO EL LOADING A FALSE Y LO MANDO A LOGIN
        const user = userCredential.user;
        console.log(user);
        setIsloading(false);
        toast.success("Registration Successful!");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
        setIsloading(false);
      });
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
          <form onSubmit={registerUSer}>
            <input
              className="inpRegister"
              type="text"
              placeholder="Username"
              required
              value={user}
              onChange={(event) => setUser(event.target.value)}
            />
            <input
              className="inpRegister"
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="inpRegister"
              type="email"
              placeholder="E-mail"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              className="inpRegister"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <input
              className="inpRegister"
              type="password"
              placeholder="Confirm Password"
              required
              value={cPassword}
              onChange={(event) => setcPassword(event.target.value)}
            />

            <input
              className="dateRegister"
              type="date"
              placeholder="Date of birth"
              required
              value={dateOfBirth}
              onChange={(event) => setDateOfBirth(event.target.value)}
            />
          </form>
            <button type="submit" className="submitRegister">Sign up</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
