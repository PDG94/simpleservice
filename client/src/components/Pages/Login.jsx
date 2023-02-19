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
import { Loading, NavBar, Footer } from "../index";

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
    <>
      <NavBar />
      {isLoading && <Loading />}
      <section className="container">
        <div className="img">
          <img src={loginImg} alt="Login" width="400" />
        </div>

        <div className="form">
          <h2>Login</h2>
          <form onSubmit={loginUser}>
            <input
              type="text"
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
            <button type="submit">Continue</button>
            <div>
              <Link to="/reset">
                <p>forgot your password?</p>
              </Link>
              <p onClick={signGoogle}>
                <FiMail />
              </p>{" "}
              <p>
                <GrFacebook />
              </p>
              <span>
                <p>Don't have an acoount?</p>
                <Link to="/register">
                  <button>Register</button>
                </Link>
              </span>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
