import "../Card/card.css";

export default function Card({
  name,
  image,
  service,
  price,
  rating,
  serviceimage,
}) {
  console.log(serviceimage);
  return (
    <div className="container">
      <div>
        <img src={serviceimage || image} alt="" />
        <h2 className="name">{name}</h2>
        <p className="serviceContainer">{service}</p>
      </div>

      <div className="card">
        <p className="price"> Price $ {price}</p>
        <p className="rating">⭐ {rating}</p>
        <button className="more">
          <span>more info...</span>
        </button>
      </div>
    </div>
  );
}
