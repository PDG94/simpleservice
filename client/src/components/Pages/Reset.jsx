import { Link } from "react-router-dom";
import forgot from "../Imagenes/forgot.png";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../components/Firebase/config";
import { toast } from "react-toastify";
import { useState } from "react";

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
    <div>
      <img src={forgot} alt="forgot" width="400" />
      <section className="container">
        <div className="form">
          <h2>Reset</h2>
          <form onSubmit={resetPassword}>
            <input
              type="text"
              placeholder="Email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button type="submit">Reset Password</button>
            <div>
              <p>
                <Link to="/login">-Login</Link>
              </p>
              <p>
                <Link to="/register">-Register</Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
