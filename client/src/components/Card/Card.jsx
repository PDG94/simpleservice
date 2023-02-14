import "../Card/card.css";
import { Link } from "react-router-dom";

export default function Card({ id, name, image, price, active }) {
  return (
      <Link to={`/Detail/${id}`}>
        <div class="row">
        <img class="image "src={image} alt=""/>
        <div class="cardBody">
        <h2 class="cardTitle">{name}</h2>
        <p class="cardPrice">Price: {price}</p>
        <p class="cardActive">Active: {active}</p>
        <button class="button">Get it</button>
        </div>
        </div>
        </Link>
        );
}
