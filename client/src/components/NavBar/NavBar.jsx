import { Link } from "react-router-dom";
import { SearchBar } from "../index";
import "../NavBar/navBar.css";
import {BsFillCartCheckFill} from 'react-icons/bs'

const NavBar = () => {
  const handleChange = () => {};
  return (
<ul>
  <Link to="/">
  <li className="icon"><a className="icono" href="#icon"><BsFillCartCheckFill/></a></li>
  {/* <hr className='hr'/> */}
  <li><a className="home">Home</a></li>
  </Link>
  <Link to="/Services">
  <li><a href="#Services">Services</a></li>
  </Link>
  <li className='create'>
  <Link to="/Create">Create Service</Link>
  </li>
  <span> 
  <Link to="/">
  <span> 
  <Link to="/">
  <li><a className="signUp">Login</a></li>
  </Link>
   </span> 
   <li><a href="#signIn">Register</a></li>
  </Link>
  </span>
  <Link to="/">
  </Link>
  <li className='search'>
    <SearchBar/>
  </li>
</ul>
  )
}









    
//     <ul>
//     <div classNameName="mainContainer">
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
