import { useNavigate } from "react-router-dom";
import { SearchBar } from "../index";
import "../NavBar/navBar.css";
import { auth } from "../../components/Firebase/config"
import { toast } from "react-toastify";
import { /*onAuthStateChanged,*/ signOut } from "firebase/auth";
import logo from "../Imagenes/logo.png";
// import {BsFillCartCheckFill} from 'react-icons/bs'
// import { useEffect, useState } from "react";
// import {FaUserCircle} from "react-icons/fa"

const NavBar = () => {
  const navigate = useNavigate()
  // const[displayName,setDisplayName] = useState("")
 // monitores si estas logueado y muestra el nombre del usuario en la barra de nav 
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
      
  //       const uid = user.uid;
  //       console.log(user.displayName);
  //       setDisplayName(user.displayName)  
  //     } else {
  //       setDisplayName("")
  //     }
  //   });
  // },[])
      
  function logoutUser(){
    signOut(auth).then(() => {
      toast.success("Logout successfully.")
      navigate("/home")
    }).catch((error) => {
      toast.error(error.message)
    });
  }
  return (
<ul>
  {/* <li className="icon"><a className="icono" href="#icon"><BsFillCartCheckFill/></a></li> */}
  <li>
    <a href="/cart" className="cart"><img src={logo} alt="logo" className="icono"/>
  </a></li>
  <li><a className="welcome" href="/">Welcome Page</a></li>
  <li><a className="home" href="/home">Home</a></li>
  <li><a  className="services" href="/Services">Services</a></li>
  <li>
  <a  className='create' href="/Create">Create Service</a>
  </li>
  {/* <a href="#"><FaUserCircle size={16}/>
   Hi, {displayName}
   </a> */}
  <li><a className="register" href="/register">Register</a></li>
  <li><a className="login" href="/login">Login</a></li>
  <li><a   className="logout" href="/home" onClick={logoutUser}>Logout</a></li>
    <SearchBar/>
</ul>
  )
}
export default NavBar;
  
 


  

  
  
  
 

  
  

   
   
  
