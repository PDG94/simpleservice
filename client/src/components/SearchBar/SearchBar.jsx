import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clearName, getServicesByName, resedPaged } from "../../redux/actions";
import "../SearchBar/searchBar.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(event) {
    event.preventDefault();
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getServicesByName(name));
    dispatch(resedPaged(1));
    setName("");
  }

  function handleOnKeyPress(event) {
    if (event.key === "Enter") {
      handleSubmit(event);
      dispatch(resedPaged(1));
      dispatch(clearName());
    }
  }

  return (
    <div className="search">
      <div>
        <input
          onChange={(e) => {
            handleInputChange(e);
          }}
          type="text"
          placeholder="🔍   Search..."
          value={name}
          onKeyPress={(e) => handleOnKeyPress(e)}
          className="inputSearch"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
