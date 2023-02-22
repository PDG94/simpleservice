import "../NavBar/navBar.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../components/Firebase/config";
import { toast } from "react-toastify";
import { onAuthStateChanged, signOut } from "firebase/auth";
// import logo from "../Imagenes/logo.png";
// import {BsFillCartCheckFill} from 'react-icons/bs'
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { activeUsers, removeUsers } from "../../redux/actions";
import ShowOnLogin from "../HiddenLinks/ShowOnLogin";
import ShowOnLogout from "../HiddenLinks/ShowOnLogout";
import AdminOnlyRoute from "../AdminOnlyRoutes/AdminOnlyRoute";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState("");
  const dispatch = useDispatch();

  //  monitores si estas logueado y muestra el nombre del usuario en la barra de nav
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        if (user.displayName == null) {
          const u1 = user.email.slice(0, -10);
          const uperC = u1.charAt(0).toUpperCase() + u1.slice(1);
          setDisplayName(uperC);
        } else {
          setDisplayName(user.displayName);
        }
        dispatch(
          activeUsers({
            email: user.email,
            useName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
            isRegistered: true,
          })
        );
      } else {
        setDisplayName("");
        dispatch(removeUsers());
      }
    });
  }, [dispatch, displayName]);

  function logoutUser() {
    signOut(auth)
      .then(() => {
        toast.success("Logout successfully.");
        navigate("/home");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }
  return (
    <ul>
      {/* <li className="icon"><a className="icono" href="#icon"><BsFillCartCheckFill/></a></li> */}
      {/* <li>
        <Link to="/cart" className="cart">
          <img src={logo} alt="logo" className="icono" />
        </Link>
      </li> */}
      <li>
        <Link className="welcome" to="/">
          Welcome Page
        </Link>
      </li>

      <li>
        <Link className="home" to="/home">
          Home
        </Link>
      </li>

      <li>
        <Link className="services" to="/Services">
          Services
        </Link>
      </li>
      <li>
        <Link className="create" to="/Create">
          Create Service
        </Link>
      </li>

      <ShowOnLogout>
        <li>
          <Link className="login" to="/login">
            Login
          </Link>
        </li>
      </ShowOnLogout>

      <AdminOnlyRoute>
        <li>
          <Link className="admin" to="/admin/dashboard">
            Admin
          </Link>
        </li>
      </AdminOnlyRoute>

      <ShowOnLogin>
        <li>
          <Link className="myorders" to="/myorders">
            {" "}
            My Cart{" "}
          </Link>
        </li>
      </ShowOnLogin>

      <ShowOnLogin>
        <li className="logout">
          <Link to="/home" onClick={logoutUser}>
            Logout
          </Link>
        </li>
      </ShowOnLogin>

      <ShowOnLogin>
        <li>
          <Link className="greet" to="/home">
            <FaUserCircle size={16} />
            {"  "}Hi, {displayName}
          </Link>
        </li>
      </ShowOnLogin>
    </ul>
  );
};
export default NavBar;
