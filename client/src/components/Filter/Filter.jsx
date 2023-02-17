import "../Filter/filter.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { cardsFilter, getCategories, getServices } from "../../redux/actions";

export default function Filter() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const [filter, setFilter] = useState({
    order: "",
    direction: "",
    categoryId: "",
  });

  const handleCategory = (e) => {
    setFilter({ ...filter, categoryId: e.target.value });
  };

  const handlePrice = (e) => {
    setFilter({ ...filter, order: "price", direction: e.target.value });
  };

  const handleName = (e) => {
    setFilter({ ...filter, order: "servicename", direction: e.target.value });
  };

  const handleRating = (e) => {
    setFilter({ ...filter, order: "rating", direction: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(getServices());
    dispatch(cardsFilter(filter));
  };

  return (
    <div className="filter">
      <li>
        <select onChange={(e) => handleCategory(e)}>
          {/*CATEGORIAS*/}
          <option value="all">Categories</option>
          {categories?.map((elem) => (
            <option key={elem.id} value={elem.id}>
              {elem.name}
            </option>
          ))}
        </select>

        {/*PRECIO*/}
        <select onChange={(e) => handlePrice(e)}>
          <option value="all">Price</option>
          <option value="DESC">More Price</option>
          <option value="ASC">Low Price</option>
        </select>

        {/*ABC*/}
        <select onChange={(e) => handleName(e)}>
          <option value="all">Order</option>
          <option value="ASC">A-Z</option>
          <option value="DESC">Z-A</option>
        </select>

        {/*RATING*/}
        <select onChange={(e) => handleRating(e)}>
          <option value="all">Rating</option>
          <option value="DESC">More Rating</option>
          <option value="ASC">Low Rating</option>
        </select>
        <button onClick={() => handleSubmit()}>Filter & Sort</button>
      </li>
    </div>
  );
}
