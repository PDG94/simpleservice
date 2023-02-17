import { NavBar, Footer } from "../index";
import { getServicesDetail, cleanState } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const serviceDetail = useSelector((state) => state.serviceDetail);

  useEffect(() => {
    dispatch(cleanState());
    dispatch(getServicesDetail(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (serviceDetail.length === 0) return <h1>Cargando</h1>;

  return (
    <div>
      <NavBar />
      <Link to={"/Services"}>
        <button>Back</button>
      </Link>

      {serviceDetail.map((service) => {
        return (
          <div key={service.id}>
            <h1>{service?.username}</h1>

            <img src={service?.userimage} alt="" />

            <br></br>

            <label>Service Name: </label>
            <p>{service?.servicename}</p>

            <label>Rating: </label>
            <p>{service?.rating}</p>

            <label>Price: </label>
            <p>{service?.price}</p>

            <label>Description: </label>
            <p>{service?.description}</p>
          </div>
        );
      })}
      <Footer />
    </div>
  );
}
