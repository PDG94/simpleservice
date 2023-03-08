import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  clearName,
  getServicesByName,
} from "../../redux/actions/servicesActions";
import { resedPaged } from "../../redux/actions/miscActions";
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
          placeholder="🔍  Search Service..."
          value={name}
          onKeyDown={(e) => handleOnKeyPress(e)}
          className="inputSearch"
        />
        <button className="btnSearch" onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  );
}
