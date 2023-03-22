import { Link, useNavigate } from "react-router-dom";
import forgot from "../Imagenes/forgot.png";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../components/Firebase/config";
import { toast } from "react-toastify";
import { useState } from "react";
import "../Pages/reset.css";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

export function Reset() {
  const [email, setEmail] = useState("");
  const [setIsLoading] = useState(false);
  const navigate = useNavigate();

  function resetPassword(event) {
    event.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Check your email for a reset link");
        navigate("/login");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  }

  return (
    <div className="mainReset">
      <NavBar />
      <Link to="/login" style={{ textDecoration: "none" }}>
        <button className="btnResetBack">Back To Login</button>
      </Link>
      <div>
        <section className="containerReset">
          <div className="formReset">
            <h1 className="titleReset">Forgot your password?</h1>
            <p className="pleaseMessage">
              Please enter the email address you'd like
              <br /> your password reset information sent to
            </p>
            <form onSubmit={resetPassword} className="formRes">
              <p className="enterReset">Enter your email address</p>
              <input
                type="text"
                placeholder="user1234@simpleservice.com"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="inpReset"
              />
              <button type="submit" className="submit">
                Request reset link
              </button>
            </form>
          </div>
          <div className="contImg">
            <img src={forgot} alt="forgot" className="imgReset" />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
