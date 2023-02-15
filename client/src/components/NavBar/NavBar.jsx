import { Link } from "react-router-dom";
import { SearchBar } from "../index";
import "../NavBar/navBar.css";

const NavBar = () => {
  const handleChange = () => {};
  return (
    <div className="mainContainer">
      <Link to="/">
        <button onClick={handleChange}>Home</button>
      </Link>

      <SearchBar />

      <Link to="/Create">
        <button>Create</button>
      </Link>
    </div>
  );
};

export default NavBar;
