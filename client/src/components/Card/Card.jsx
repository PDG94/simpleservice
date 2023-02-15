import "../Card/card.css";
import { Link } from "react-router-dom";

export default function Card({ id, name, image, price, active,rating }) {
  return (
    <div class="container">
      <div className="info">
        <img class="img " src={image} alt="" />
      </div>

      <div class="name">
        <h2>{name}</h2>
      </div>
      <p>Price: ${price}</p>
      <p>Service: {active}</p>
      <p>Rating:⭐{rating}</p>
      <Link to={`/Detail/${id}`}>
        <button class="button">Get it</button>
      </Link>
    </div>
  );
}
