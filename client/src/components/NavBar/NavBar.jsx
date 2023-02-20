import "../NavBar/navBar.css";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "../index";
import { auth } from "../../components/Firebase/config";
import { toast } from "react-toastify";
import { onAuthStateChanged, signOut } from "firebase/auth";
import logo from "../Imagenes/logo.png";
import {BsFillCartCheckFill} from 'react-icons/bs'
import { useEffect, useState } from "react";
import {FaUserCircle} from "react-icons/fa"
import { useDispatch } from "react-redux";
import { activeUsers,removeUsers } from "../../redux/actions";
import ShowOnLogin from "../HiddenLinks/ShowOnLogin";
import ShowOnLogout from "../HiddenLinks/ShowOnLogout";
import AdminOnlyLink from "../AdminOnlyRoute/AdminOnlyLink";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const[displayName,setDisplayName] = useState("")
  const dispatch = useDispatch();

  //  monitores si estas logueado y muestra el nombre del usuario en la barra de nav 
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        // const uid = user.uid;
        if(user.displayName == null){
          const u1= user.email.slice(0,-10);
          const uperC = u1.charAt(0).toUpperCase() + u1.slice(1)
          setDisplayName(uperC)
        }else{
        setDisplayName(user.displayName)  
        }
        dispatch(
          activeUsers({
            email: user.email,
            useName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
            isRegistered : true,
          })  
        );
      } else {
        setDisplayName("")
        dispatch(removeUsers())
      }
    });
  },[dispatch,displayName])

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
      <li>
        <a href="/cart" className="cart">
          <img src={logo} alt="logo" className="icono" />
        </a>
      </li>
      <li>
        <a className="welcome" href="/">
          Welcome Page
        </a>
      </li>
      <li>
        <a className="home" href="/home">
          Home
        </a>
      </li>
      <li>
        <a className="services" href="/Services">
          Services
        </a>
      </li>
      <li>
        <a className="create" href="/Create">
          Create Service
        </a>
      </li>

      <ShowOnLogin>
       <a href="/home"><FaUserCircle size={16}/>
   Hi, {displayName}
   </a> 
   </ShowOnLogin>

   <ShowOnLogout>
    <li>
        <a className="login" href="/login">
          Login
        </a>
        </li>
      </ShowOnLogout>

      <AdminOnlyLink>
        <li>
    <a className="admin" href="/admin">
    Admin
    </a>
  </li>
  </AdminOnlyLink>

  <ShowOnLogin>
<li className="myorders"><a href="/myorders">My Orders</a></li>
</ShowOnLogin>

<ShowOnLogin>
   <li className="logout" ><a href="/home" onClick={logoutUser}>Logout</a></li>
   </ShowOnLogin>
   
      <SearchBar />
    </ul>
  );
};
export default NavBar;
