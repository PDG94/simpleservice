import "../Filter/filter.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { cardsFilter, getServices } from "../../redux/actions/servicesActions";
import { resedPaged, getCategories } from "../../redux/actions/miscActions";

export default function Filter() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.misc.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const [filter, setFilter] = useState({
    order: "",
    direction: "",
    categoryId: "",
  });

  //Con esta funcion reiniciamos los SELECT
  const resetFilter = () => {
    document.getElementById("categoriesSelect").selectedIndex = 0; // Primero se agrega un id al select para identificarlo y luego podemos acceder a el mediante getElementById y despues le decimos en que posicion de las opciones queremos que reinicie el valor del select con selectedIndex = 0
    document.getElementById("priceSelect").selectedIndex = 0;
    document.getElementById("alphabetSelect").selectedIndex = 0;
    document.getElementById("ratingSelect").selectedIndex = 0;
  };

  const handleCategory = (e) => {
    setFilter({ ...filter, categoryId: e.target.value });
  };

  const handlePrice = (e) => {
    setFilter({ ...filter, order: "price", direction: e.target.value });
    document.getElementById("alphabetSelect").selectedIndex = 0;
  };

  const handleName = (e) => {
    setFilter({ ...filter, order: "servicename", direction: e.target.value });
    document.getElementById("priceSelect").selectedIndex = 0;
  };

  const handleSubmit = () => {
    dispatch(getServices());
    dispatch(cardsFilter(filter));
    dispatch(resedPaged(1));
    resetFilter();
    setFilter({
      order: "",
      direction: "",
      categoryId: "",
    });
  };

  return (
    <div className="filterBox">
      <div className="filter">
        <h1 className="titleFil">Filters & Sorts</h1>

        {/*CATEGORIAS*/}
        <br />
        <span className="spanFilter">Select a category</span>
        <select
          id="categoriesSelect"
          className="selectFilter"
          onChange={(e) => handleCategory(e)}
        >
          <option value="all">Categories</option>
          {categories?.map((elem) => (
            <option key={elem.id} value={elem.id}>
              {elem.name}
            </option>
          ))}
        </select>

        {/*PRECIO*/}
        <span className="spanFilter">Order services by </span>
        <select
          id="priceSelect"
          className="selectFilter"
          onChange={(e) => handlePrice(e)}
        >
          <option value="all">Price</option>
          <option value="DESC">More Price</option>
          <option value="ASC">Less Price</option>
        </select>

        {/*ABC*/}
        <span className="spanFilter">Order services by </span>
        <select
          id="alphabetSelect"
          className="selectFilter"
          onChange={(e) => handleName(e)}
        >
          <option value="all">Alphabet</option>
          <option value="ASC">A-Z</option>
          <option value="DESC">Z-A</option>
        </select>

        <button className="btnFilter" onClick={() => handleSubmit()}>
          Press to Filter
        </button>
      </div>
    </div>
  );
}
