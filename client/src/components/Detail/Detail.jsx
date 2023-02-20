import { NavBar, Footer, Loading } from "../index";
import { getServicesDetail, cleanState } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../Detail/detail.css";

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const serviceDetail = useSelector((state) => state.serviceDetail);

  useEffect(() => {
    dispatch(getServicesDetail(id));
    return () => {
      dispatch(cleanState());
    };
  }, [dispatch, id]);

  return (
    <div className="detail">
      <NavBar />
      <div className="detail2">
        <Link to={"/Services"}>
          <button className="Bhome">Back</button>
        </Link>

        {serviceDetail.length ? (
          serviceDetail.map((service) => {
            return (
              <div>
                <div key={service.id}>
                  <h1>{service?.username}</h1>

                  <img className="imgDet" src={service?.userimage} alt="" />

                  <br></br>
                  <div className="Rinfo">
                    <label>Service Name: </label>
                    <p>{service?.servicename}</p>

                    <label>Price: </label>
                    <p>${service?.price}</p>

                    <label>Rating: </label>
                    <p>{service?.rating}</p>
                  </div>
                  <div className="description">
                    <h2>Description: </h2>
                    <h4>{service?.description}</h4>
                  </div>
                </div>
              </div>
            );
          })

        ): (<span class="loader"></span>)
        }

   

      </div>
      <Footer />
    </div>
  );
}
