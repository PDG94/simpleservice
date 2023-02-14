
/* import "../CardsContainer/cardsContainer.css"; */
import { Card, Paged, SearchBar } from "../index";
import { useSelector} from "react-redux"
import { useState } from "react";



export default function CardsContainer() {

       const [allServices , setAllServices] = useState( [
        {
          id: 1,
          name: "Edwards",
          image: "https://images.pexels.com/photos/2677280/pexels-photo-2677280.jpeg?auto=compress&cs=tinysrgb&w=800",
          price: "2000",
          active: "Developer",
        },
        {
          id: 2,
          name: "Magali",
          image: "https://images.pexels.com/photos/4011934/pexels-photo-4011934.jpeg?auto=compress&cs=tinysrgb&w=800",
          price: "4000",
          active: "Developer",
        },
        {
          id: 3,
          name: "Ash",
          image: "https://images.pexels.com/photos/3651752/pexels-photo-3651752.jpeg?auto=compress&cs=tinysrgb&w=800",
          price: "8000",
          active: "Developer",
        },
        {
          id: 4,
          name: "Lu",
          image: "https://images.pexels.com/photos/12359168/pexels-photo-12359168.jpeg?auto=compress&cs=tinysrgb&w=800",
          price: "5000",
          active: "Developer",
        },
        {
          id: 4,
          name: "Lu",
          image: "https://images.pexels.com/photos/1142941/pexels-photo-1142941.jpeg?auto=compress&cs=tinysrgb&w=800",
          price: "5000",
          active: "Developer",
        },
        {
          id: 4,
          name: "Lu",
          image: "https://images.pexels.com/photos/165505/pexels-photo-165505.jpeg?auto=compress&cs=tinysrgb&w=800",
          price: "5000",
          active: "Developer",
        },
        {
          id: 4,
          name: "Lu",
          image: "https://images.pexels.com/photos/4321085/pexels-photo-4321085.jpeg?auto=compress&cs=tinysrgb&w=800",
          price: "5000",
          active: "Developer",
        },
        {
          id: 4,
          name: "Lu",
          image: "image",
          price: "5000",
          active: "Developer",
        },
        {
          id: 4,
          name: "Lu",
          image: "image",
          price: "5000",
          active: "Developer",
        },
        {
          id: 4,
          name: "Lu",
          image: "image",
          price: "5000",
          active: "Developer",
        },
        {
          id: 4,
          name: "Lu",
          image: "image",
          price: "5000",
          active: "Developer",
        },
        {
          id: 4,
          name: "Lu",
          image: "image",
          price: "5000",
          active: "Developer",
        },
        {
          id: 4,
          name: "Lu",
          image: "image",
          price: "5000",
          active: "Developer",
        },
        {
          id: 4,
          name: "Lu",
          image: "image",
          price: "5000",
          active: "Developer",
        },
        {
          id: 4,
          name: "Lu",
          image: "image",
          price: "5000",
          active: "Developer",
        },
        {
          id: 4,
          name: "Lu",
          image: "image",
          price: "5000",
          active: "Developer",
        },
        {
          id: 4,
          name: "Lu",
          image: "image",
          price: "5000",
          active: "Developer",
        },
        {
          id: 4,
          name: "Lu",
          image: "image",
          price: "5000",
          active: "Developer",
        },
      ])
   
       const [ currentPage, setCurrentPage ] = useState(1) // seteo la pagina para que empiece en 1
       const [ servicesPerPage, setServicesPerPage ] = useState(6) // servicios por pagina
       const indexOfLastService = currentPage*servicesPerPage // 6
       const indexOfFirstService = indexOfLastService - servicesPerPage // 6-6 = 0
       const currentServices = allServices.slice(indexOfFirstService,indexOfLastService)


       const paged=(pageNumber)=>{
        return setCurrentPage(pageNumber);
       };
       
       
  const info = [
    {
      id: 1,
      name: "Edwards",
      image: "image",
      price: "2000",
      active: "Developer",
    },
    {
      id: 2,
      name: "Magali",
      image: "image",
      price: "4000",
      active: "Developer",
    },
    {
      id: 3,
      name: "Ash",
      image: "image",
      price: "8000",
      active: "Developer",
    },
    {
      id: 4,
      name: "Lu",
      image: "image",
      price: "5000",
      active: "Developer",
    },
    {
      id: 4,
      name: "Lu",
      image: "image",
      price: "5000",
      active: "Developer",
    },
    {
      id: 4,
      name: "Lu",
      image: "image",
      price: "5000",
      active: "Developer",
    },
    {
      id: 4,
      name: "Lu",
      image: "image",
      price: "5000",
      active: "Developer",
    },
    {
      id: 4,
      name: "Lu",
      image: "image",
      price: "5000",
      active: "Developer",
    },
    {
      id: 4,
      name: "Lu",
      image: "image",
      price: "5000",
      active: "Developer",
    },
    {
      id: 4,
      name: "Lu",
      image: "image",
      price: "5000",
      active: "Developer",
    },
    {
      id: 4,
      name: "Lu",
      image: "image",
      price: "5000",
      active: "Developer",
    },
    {
      id: 4,
      name: "Lu",
      image: "image",
      price: "5000",
      active: "Developer",
    },
  ];

 //PARA QUE HAGA SCROLL HACIA ARRIBA
 useEffect(() => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

  return (
    <div>
      <SearchBar setCurrentPage={setCurrentPage}/>
      <div>
        {!info.length ? (
          <div>
            <h1>Cargando</h1>
          </div>
        ) : (
          <section className="py-4 container">
            <div className="row justify-content-center">
          {currentServices.length && currentServices.map((user,index) => {
            return (
             
                <Card
                 key={user?.index}
                  id={user?.id}
                  name={user?.name}
                  image={user?.image}
                  price={user?.price}
                  active={user?.active}
                />
            )
          })}
          </div>
          </section>
        )}
        <Paged
        servicesPerPage={servicesPerPage}
        allServices={allServices.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        paged={paged}
        />
      </div>
    </div>
  );
};