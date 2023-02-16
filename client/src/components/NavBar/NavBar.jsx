import { Link } from "react-router-dom";
import { SearchBar } from "../index";
import "../NavBar/navBar.css";
import {BsFillCartCheckFill} from 'react-icons/bs'

const NavBar = () => {
  const handleChange = () => {};
  return (
<ul>
  <Link to="/">
  <li><a href="#icon"><BsFillCartCheckFill/></a></li>
  <hr class='hr'/>
  <li><a class="home">Home</a></li>
  </Link>
  <Link to="/Services">
  <li><a href="#Services">Services</a></li>
  </Link>
  <li class='create'>
  <Link to="/Create">Create</Link>
  </li>
  <li class='search'>
    <SearchBar/>
  </li>
  <span> 
  <Link to="/">
  <span> 
  <Link to="/">
  <li><a class="signUp">Login</a></li>
  </Link>
   </span> 
   <li><a href="#signIn">Register</a></li>
  </Link>
  </span>
  
  <Link to="/">

 
  
  </Link>
</ul>
  )
}









    
//     <ul>
//     <div className="mainContainer">
//       <Link to="/">
//         <button onClick={handleChange}>Home</button>
//       </Link>
      
//       <Link to="/">
//         <button onClick={handleChange}>Catalog</button>
//       </Link>

//       <Link to="/">
//         <button onClick={handleChange}>Sign In</button>
//         </Link>

//         <Link to="/">
//         <button onClick={handleChange}>Sing Up</button>
//       </Link>

//       <Link to="/">
//           <BsFillCartCheckFill size={20} />
//       </Link>

//       <SearchBar />
//     </div>
//     </ul>
//   );
// };

export default NavBar;
