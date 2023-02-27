import "../NavBar/navBar.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../components/Firebase/config";
import { toast } from "react-toastify";
import { onAuthStateChanged, signOut } from "firebase/auth";
import logos from "../Imagenes/logos.ico";
import { useEffect, useState } from "react";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { activeUsers, removeUsers, getServices } from "../../redux/actions";
import ShowOnLogin from "../HiddenLinks/ShowOnLogin";
import ShowOnLogout from "../HiddenLinks/ShowOnLogout";
import AdminOnlyRoute from "../AdminOnlyRoutes/AdminOnlyRoute";
import { Link } from "react-router-dom";
import { SearchBar } from "../index";
import UserOnlyRoute from "../AdminOnlyRoutes/UsersOnlyRoutes";

const NavBar = () => {
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState("");
  const dispatch = useDispatch();
  const path = window.location.pathname;
  const pathSearch = "/Services";
  const cartTotalQuantity = useSelector((state) => state.cartTotalQuantity);

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
  const handleRefresh = () => {
    dispatch(getServices());
  };

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

        <Link
          className="btnNav"
          to="/Services"
          onClick={(e) => handleRefresh(e)}
        >
          Services
        </Link>

        <ShowOnLogin>
          <Link className="btnNav" to="/Create">
            Create Service
          </Link>
        </ShowOnLogin>

        <Link
          className="btnNav"
          to="/Services"
          onClick={(e) => handleRefresh(e)}
        >
          Refresh
        </Link>
      </div>

      <div className="btnsUser">
        <div className="searchNav">
          {path === pathSearch ? <SearchBar /> : null}
        </div>

        <ShowOnLogout>
          <Link className="login" to="/login">
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
          <UserOnlyRoute>
            <Link className="btnNav" to="/profile">
              My Profile
            </Link>
          </UserOnlyRoute>
        </ShowOnLogin>

        <ShowOnLogin>
          <Link className="btnNav" to="/home" onClick={logoutUser}>
            Logout
          </Link>
        </ShowOnLogin>

        <ShowOnLogin>
          {" "}
          <Link className="btnNav" to="/cart">
            <FaShoppingCart size={26} className="shoppingCart" />
            {"  "}
            {cartTotalQuantity}
          </Link>
        </ShowOnLogin>

        <ShowOnLogin>
          <div className="greet">
            <FaUserCircle size={16} />
            Hi, {displayName}
          </div>
        </ShowOnLogin>
      </div>
    </nav>
  );
};
export default NavBar;
