
/* import "../CardsContainer/cardsContainer.css"; */
import { Card } from "../index";

export default function CardsContainer() {

 const allServices = useSelector((state)=>state.services)
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
      <div>
        {!info.length ? (
          <div>
            <h1>Cargando</h1>
          </div>
        ) : (
          info.map((user) => {
            return (
              <div key={user?.id}>
                <Card
                  id={user?.id}
                  name={user?.name}
                  image={user?.image}
                  price={user?.price}
                  active={user?.active}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};


