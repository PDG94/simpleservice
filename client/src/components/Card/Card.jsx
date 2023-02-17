import "../Card/card.css";
import { Link } from "react-router-dom";

export default function Card({ id, name, image, price, service,rating }) {
  return (
    <div class="container">
      <div>
        <img src={image} alt="" />
      </div>
      <div class="card">
        <h2>{name}</h2>
        <p>Service: {service}</p>
        <p>Price: ${price}</p>
      <p>Rating:⭐{rating}</p>
      <Link to={`/Detail/${id}`}>
        <button class="button">Get it</button>
      </Link>
      </div>
    </div>
  );
}
