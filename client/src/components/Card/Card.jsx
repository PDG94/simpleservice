import "../Card/card.css";
import { Link } from "react-router-dom";

export default function Card({ id, name, image, service, price, rating }) {
  return (
    <div className="container">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="card">
        <h2>{name}</h2>
        <p>Service: {service}</p>
        <p>Price: ${price}</p>
        <p>Rating:⭐{rating}</p>
        <Link to={`/Detail/${id}`}>
          <button className="button">Get it</button>
        </Link>
      </div>
    </div>
  );
}
