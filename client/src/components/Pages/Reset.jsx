import { Link } from "react-router-dom";
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

  function resetPassword(event) {
    event.preventDefault();
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsLoading(false);
        toast.success("Check your email for a reset link");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  }

  return (
    <div className="mainReset">
      <NavBar />
      <div className="boxReset">
        <section className="containerReset">
          <div className="formReset">
            <h2 className="titleReset">Forgot your password?</h2>
            <p className="pleaseMessage">
              Please enter the email address you'd like your <br /> password
              reset information sent to
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
              <div className="linkBoxReset">
                <Link
                  to="/login"
                  className="linkReset"
                  style={{ textDecoration: "none" }}
                >
                  <button className="btnResetBack">Back To Login</button>
                </Link>
              </div>
            </form>
          </div>
        </section>
        <div className="contImg">
          <img src={forgot} alt="forgot" className="imgReset" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
