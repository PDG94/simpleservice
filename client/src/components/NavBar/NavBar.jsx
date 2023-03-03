import "../NavBar/navBar.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../components/Firebase/config";
import { toast } from "react-toastify";
import { onAuthStateChanged, signOut } from "firebase/auth";
import logos from "../Imagenes/logos.ico";
import { useEffect, useState } from "react";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  activeUsers,
  removeUsers,
  getServices,
  /* storeSession,*/
  calculateTotalQuantity,
} from "../../redux/actions";
import ShowOnLogin from "../HiddenLinks/ShowOnLogin";
import ShowOnLogout from "../HiddenLinks/ShowOnLogout";
import AdminOnlyRoute from "../AdminOnlyRoutes/AdminOnlyRoute";
import { Link } from "react-router-dom";
import { SearchBar } from "../index";
import UserOnlyRoute from "../AdminOnlyRoutes/UsersOnlyRoutes";

const NavBar = () => {
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState("");
  // const [scrollPage, setScrollPage] = useState(false);
  const dispatch = useDispatch();
  const path = window.location.pathname;
  const pathSearch = "/Services";
  const cartTotalQuantity = useSelector((state) => state.cartTotalQuantity);

  useEffect(() => {
    dispatch(calculateTotalQuantity());
  }, [dispatch]);

  //CODE PARA QUE TE SIGA EL CARRITO CUANDO HACED SCROLLDOWN
  // const fixNavbar = () => {
  //   if (window.scrollY > 50) {
  //     setScrollPage(true);
  //   } else {
  //     setScrollPage(false);
  //   }
  // };
  // window.addEventListener("scroll", fixNavbar);

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
        // dispatch(storeSession(auth.currentUser));
        localStorage.setItem("token", "");
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
          WELCOME PAGE
        </Link>

        <Link className="btnNav" to="/home">
          HOME
        </Link>

        <Link
          className="btnNav"
          to="/Services"
          onClick={(e) => handleRefresh(e)}
        >
          SERVICES
        </Link>

        {/* <ShowOnLogin>
          <Link className="btnNav" to="/Create">
            CREATE SERVICE
          </Link>
        </ShowOnLogin> */}

        {path === pathSearch ? (
          <Link
            className="btnNav"
            to="/Services"
            onClick={(e) => handleRefresh(e)}
          >
            REFRESH
          </Link>
        ) : null}
        <div className="searchNav">
          {path === pathSearch ? <SearchBar /> : null}
        </div>
      </div>

      <div className="btnsUser">

        <ShowOnLogout>
          <Link className="btnNav" to="/login">
            LOGIN
          </Link>
        </ShowOnLogout>

        <ShowOnLogout>
          <div className="space">a</div>
        </ShowOnLogout>

        <AdminOnlyRoute>
          <Link className="btnNav" to="/admin/home">
            ADMIN
          </Link>
        </AdminOnlyRoute>

        <ShowOnLogin>
          <UserOnlyRoute>
            <Link className="btnNav" to="/profile">
              MY PROFILE
            </Link>
          </UserOnlyRoute>
        </ShowOnLogin>

        <ShowOnLogin>
          <Link className="btnNav" to="/home" onClick={logoutUser}>
            LOGOUT
          </Link>
        </ShowOnLogin>

        <ShowOnLogin>
          {" "}
          <Link className="btnNav" to="/cart">
            <FaShoppingCart size={32} className="shoppingCart" />
            {"  "}
            {cartTotalQuantity}
          </Link>
        </ShowOnLogin>

        <ShowOnLogin>
          <div className="greet">
            <FaUserCircle className="circleNav" size={30} />{"  "}
            Hi, {displayName}
          </div>
        </ShowOnLogin>
      </div>
    </nav>
  );
};
export default NavBar;
