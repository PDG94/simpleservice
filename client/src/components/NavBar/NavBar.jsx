import { Link, useNavigate } from "react-router-dom";
import { SearchBar } from "../index";
import "../NavBar/navBar.css";
import { auth } from "../../components/Firebase/config"
import { toast } from "react-toastify";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {BsFillCartCheckFill} from 'react-icons/bs'
import { useEffect, useState } from "react";
import {FaUserCircle} from "react-icons/fa"

const NavBar = () => {
  const navigate = useNavigate()
  const[displayName,setDisplayName] = useState("")
 // monitores si estas logueado y muestra el nombre del usuario en la barra de nav 
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
      
        const uid = user.uid;
        console.log(user.displayName);
        setDisplayName(user.displayName)  
      } else {
        setDisplayName("")
      }
    });
  },[])
      
  function logoutUser(){
    signOut(auth).then(() => {
      toast.success("Logout successfully.")
      navigate("/")
    }).catch((error) => {
      toast.error(error.message)
    });
  }



  return (
<ul>
  <Link to="/">
  <li><a href="#home">Home</a></li>
  </Link>
  <Link to="/catalog">
  <li><a href="#catalog">Catalog</a></li>
  </Link>
  <Link to="/carrito">
  <span>
  <li><a href="#icon"><BsFillCartCheckFill/></a></li>
  </span>
  </Link>
  <Link to="/login">
  <span> 
  <li><a href="#signUp">Login</a></li>
   </span> 
   </Link>
   <a href="#"><FaUserCircle size={16}/>
   Hi, {displayName}
   </a>
   <Link to="register">
   <li><a href="#signIn">Register</a></li>
  </Link>
  <Link to="/" onClick={logoutUser}>
   <li><a href="#logout">Logout</a></li>
  </Link>
</ul>
  )
}
export default NavBar;
