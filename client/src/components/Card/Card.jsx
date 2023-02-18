import "../Card/card.css";


export default function Card({ name, image, service, price, rating }) {
  return (
    <div className="container">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="card">
        <h2 className="name">{name}</h2>
        <p className="service">Service : {service}</p>
        <p className="price"> Price $ {price}</p>
        <p className="rating">⭐ {rating}</p>
        <button className="more" ><span>more info...</span></button>
      </div>
    </div>
  );
}
