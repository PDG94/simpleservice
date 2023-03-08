import { Card, Filter, Paged } from "../index";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import "../CardsContainer/cardsContainer.css";
import { getServices } from "../../redux/actions/servicesActions";
import { resedPaged } from "../../redux/actions/miscActions";
import { Link } from "react-router-dom";

export default function CardsContainer() {
  const dispatch = useDispatch();
  const allServices = useSelector((state) => state.services.services);

  const currentPage = useSelector((state) => state.misc.currentPage);
  const [servicesPerPage] = useState(6); // servicios por pagina
  const indexOfLastService = currentPage * servicesPerPage; // 6
  const indexOfFirstService = indexOfLastService - servicesPerPage; // 6-6 = 0
  const currentServices = allServices.slice(
    indexOfFirstService,
    indexOfLastService
  );

  const paged = (currentPage) => {
    dispatch(resedPaged(currentPage));
  };

  //PARA QUE HAGA SCROLL HACIA ARRIBA
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  return (
    <div className="containerWrapperList">
      <div className="filterService">
        <Filter />
      </div>
      <div className="cardContainer">
        {currentServices.length ? (
          currentServices.map((user) => {
            return (
              <Link
                key={user.id}
                to={`/Detail/${user.id}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  key={user?.id}
                  id={user?.id}
                  name={user["Users.name"]}
                  image={user["Users.profilepic"]}
                  price={user?.price}
                  service={user?.servicename}
                  rating={user["Users.rating"]}
                  serviceimage={user?.serviceimage}
                />
              </Link>
            );
          })
        ) : (
          <span className="loader"></span>
        )}
        <Paged
          servicesPerPage={servicesPerPage}
          allServices={allServices.length}
          paged={paged}
        />
      </div>
    </div>
  );
}
