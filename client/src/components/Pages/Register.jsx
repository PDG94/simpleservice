import React, { useState } from "react";
import { auth } from "../../components/Firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setcPassword] = useState("");
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [image, setImage] = useState("");
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
    <>
     <NavBar/>
      {isLoading && <Loading />}
      <section className="container">
        <div className="form">
          <h2>Create acoount</h2>
          <form onSubmit={registerUSer}>
            <input
              type="text"
              placeholder="User"
              required
              value={user}
              onChange={(event) => setUser(event.target.value)}
            />
            <input
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={cPassword}
              onChange={(event) => setcPassword(event.target.value)}
            />
            <span>Date of birth</span>
            <input
              type="date"
              placeholder="Date of birth"
              required
              value={dateOfBirth}
              onChange={(event) => setDateOfBirth(event.target.value)}
            />
            {/* <input type="image"
                    placeholder="Profile Picture(optional)"
                    required 
                    value={image} 
                    onChange={(event)=>setImage(event.target.value)}/> */}
            <button type="submit">Register</button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
