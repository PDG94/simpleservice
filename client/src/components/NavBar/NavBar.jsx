import { Link } from "react-router-dom";
import { SearchBar } from "../index";
import "../NavBar/navBar.css";
import {BsFillCartCheckFill} from 'react-icons/bs'

const NavBar = () => {
  const handleChange = () => {};
  return (
<ul>
  <Link to="/">
  <li><a href="#home">Home</a></li>
  </Link>
  <Link to="/">
  <li><a href="#catalog">Catalog</a></li>
  </Link>
  <span> 
  <Link to="/">
  <span>
  <li><a href="#icon"><BsFillCartCheckFill/></a></li>
  </span>
  <span> 
  <Link to="/">
  <li><a href="#signUp">Login</a></li>
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
