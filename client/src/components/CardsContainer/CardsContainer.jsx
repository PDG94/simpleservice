/* import "../CardsContainer/cardsContainer.css"; */
import { Card, Paged, SearchBar } from "../index";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Loading from '../Loading/Loading'
import "../CardsContainer/cardsContainer.css";

export default function CardsContainer() {
  const [allServices, setAllServices] = useState([
    {
      id: 1,
      name: "Edwards",
      image: "https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg",
      price: "6000",
      service: "Developer",
    },
    {
      id: 2,
      name: "Magali",
      image:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "4000",
      service: "Developer",
    },
    {
      id: 3,
      name: "Ash",
      image:
        "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "8000",
      service: "Developer",
    },
    {
      id: 4,
      name: "Lu",
      image:
        "https://images.pexels.com/photos/948873/pexels-photo-948873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "5000",
      service: "Developer",
    },
    {
      id: 5,
      name: "Jasson",
      image:
        "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "9000",
      service: "Developer",
    },
    {
      id: 6,
      name: "Cristian",
      image:
        "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "5000",
      service: "Developer",
    },
    {
      id: 7,
      name: "Pedro",
      image:
        "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "3000",
      service: "Developer",
    },
    {
      id: 8,
      name: "Paquito",
      image:
        "https://images.pexels.com/photos/832998/pexels-photo-832998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "4000",
      service: "Developer",
    },
    {
      id: 9,
      name: "Luis",
      image:
        "https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "11000",
      service: "Developer",
    },
    {
      id: 10,
      name: "Selene",
      image:
        "https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "43000",
      service: "Developer",
    },
    {
      id: 11,
      name: "Jorge",
      image:
        "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "3000",
      service: "Developer",
    },
    {
      id: 12,
      name: "Maria",
      image:
        "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "2000",
      service: "Developer",
    },
    {
      id: 13,
      name: "Carmen",
      image: "image",
      price: "5000",
      service: "Developer",
    },
    {
      id: 14,
      name: "Juan",
      image: "image",
      price: "5000",
      service: "Developer",
    },
    {
      id: 15,
      name: "Carlos",
      image: "image",
      price: "5000",
      service: "Developer",
    },
    {
      id: 16,
      name: "Ronald",
      image: "image",
      price: "5000",
      service: "Developer",
    },
    {
      id: 17,
      name: "Leidy",
      image: "image",
      price: "5000",
      service: "Developer",
    },
    {
      id: 18,
      name: "Mim",
      image: "image",
      price: "5000",
      service: "Developer",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1); // seteo la pagina para que empiece en 1
  const [servicesPerPage, setServicesPerPage] = useState(6); // servicios por pagina
  const indexOfLastService = currentPage * servicesPerPage; // 6
  const indexOfFirstService = indexOfLastService - servicesPerPage; // 6-6 = 0
  const currentServices = allServices.slice(
    indexOfFirstService,
    indexOfLastService
  );

  const paged = (pageNumber) => {
    return setCurrentPage(pageNumber);
  };

  //PARA QUE HAGA SCROLL HACIA ARRIBA
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });

  return (
    <div className="containerWrapperList">
      <div className="cardContainer">
        {currentServices.length ? 
          (currentServices.map((user) => {
            return (
              <div className="wrapperList">
                <Card
                  key={user?.id}
                  id={user?.id}
                  name={user?.name}
                  image={user?.image}
                  price={user?.price}
                  service={user?.service}
                />
              </div>
            );
          })
        ): <Loading/>}
      </div>
      <Paged
        servicesPerPage={servicesPerPage}
        allServices={allServices.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        paged={paged}
      />
    </div>
  );
}
