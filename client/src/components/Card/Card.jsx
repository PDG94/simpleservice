import "../Card/card.css";
import { Link } from "react-router-dom";

export default function Card({ id, name, image, price, active }) {
  return (
      <Link to={`/Detail/${id}`}>
        <div class="row">
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" >
        <div class="card p-0 overflow-hidden h-100 shadow" >
        <img class="card-img-top img-fluid" src={image} alt="Card image cap"/>
        <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p class="card-text">Price: {price}</p>
        <p class="card-text">Active: {active}</p>
        <a href="#" class="btn btn-primary">Get it</a>
        </div>
        </div>
        </div>
        </div>
        </Link>
        );
}
