import "../Pages/auth.css";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../components/Firebase/config";
import loginImg from "../Imagenes/register.png";
import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import { GrFacebook } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import '../Pages/login.css'
import { MdLogin } from "react-icons/md"
import Loading from "../Loading/Loading";



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();

  function loginUser(event) {
    event.preventDefault();
    setIsloading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        setIsloading(false);
        toast.success("Login Successful...");
        navigate("/home");
      })
      .catch((error) => {
        setIsloading(false);
        toast.error(error.message);
      });
  }
  //LOGIN WITH GOOGLE
  const provider = new GoogleAuthProvider();
  function signGoogle(e) {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        /* const user = result.user; */
        toast.success("Login Successfuly!");
        navigate("/home");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }

  return (
   <div className="containerLog">
   
      <NavBar />
   
      {isLoading && <Loading />}
      <Link to={"/Home"}>
          <button className="backLog">Back to Home</button>
        </Link>
      <div >
        
      <section className="LogCont">
        <div className="formLog">
          <h2><MdLogin className="iconLog"/>Login</h2>
          <form className="Log" onSubmit={loginUser}>
            <input className="inputlog"
              type="text"
              placeholder=" E-mail"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input className="inputlog"
              type="password"
              placeholder=" Password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button className="continue" type="submit">Continue</button>
              <Link to="/reset" style={{textDecoration: "none"}} className="forgotPhrase">
                <p className="forgot">forgot your password?</p>
              </Link>
            <div className="links">
              <span className="symbolsA" onClick={signGoogle}>
                <FiMail />
              </span>{" "}
              <span className="symbolsB">
                <GrFacebook />
              </span> 
                <p className="account">Don't have an account?</p>
                <Link to="/register">
                  <button className="RegLog">Create Account</button>
                </Link>
            </div>
          </form>
        </div>
        <div className="imgLog" ><img className="imageLog" src={loginImg} alt="" width="500" /></div>
      </section>
      <Footer />
    </div>
    </div>
  );
}
