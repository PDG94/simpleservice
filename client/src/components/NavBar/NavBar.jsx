import "../NavBar/navBar.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../components/Firebase/config";
import { toast } from "react-toastify";
import { onAuthStateChanged, signOut } from "firebase/auth";
import logos from "../Imagenes/logos.ico";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { activeUsers, removeUsers } from "../../redux/actions";
import ShowOnLogin from "../HiddenLinks/ShowOnLogin";
import ShowOnLogout from "../HiddenLinks/ShowOnLogout";
import AdminOnlyRoute from "../AdminOnlyRoutes/AdminOnlyRoute";
import { Link } from "react-router-dom";
import { SearchBar } from "../index";

const NavBar = () => {
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState("");
  const dispatch = useDispatch();
  const path = window.location.pathname;
  const pathSearch = "/Services";

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
    <nav className="mainNavContainer">
      <div className="btns">
   
        <div className="birdy">
        <img src={logos} alt="birdIcon" width="30" />
        </div>
      
        <Link className="btnNav" to="/">
          Welcome Page
        </Link>

        <Link className="btnNav" to="/home">
          Home
        </Link>

        <Link className="btnNav" to="/Services">
          Services
        </Link>

        <Link className="btnNav" to="/Create">
          Create Service
        </Link>
        </div>
        <div className="btnsUser">
        <div className="searchNav">
          {path === pathSearch ? <SearchBar /> : null}
          </div>

        <ShowOnLogout>
        <Link className="btnNav login" to="/login">
          Login
        </Link>
      </ShowOnLogout>
      <ShowOnLogout>
        <div className="space">a</div>
      </ShowOnLogout>

        <AdminOnlyRoute>
        <Link className="btnNav" to="/admin/home">
          Admin
        </Link>
      </AdminOnlyRoute>
        <ShowOnLogin>
          <Link className="btnNav" to="/myorders">
            My Cart
          </Link>
        </ShowOnLogin>

        <ShowOnLogin>
          <Link className="btnNav" to="/home" onClick={logoutUser}>
            Logout
          </Link>
        </ShowOnLogin>

        <ShowOnLogin>
          <div className="greet">
            {" "}
            <FaUserCircle size={16} />
            {"  "}Hi, {displayName}
          </div>
        </ShowOnLogin>
        </div>   
    </nav>
  );
};
export default NavBar;
