import "../Card/card.css";
import { Link } from "react-router-dom";

export default function Card({ id, name, image, price, active }) {
  return (
    <div>
      <Link to={`/Detail/${id}`}>
        <div>
          <h2>{name}</h2>
        </div>

        <div>
          <img src={image} alt="" />
        </div>

        <h4>Price: {price}</h4>

        <h4>Active: {active}</h4>
      </Link>
    </div>
  );
}
