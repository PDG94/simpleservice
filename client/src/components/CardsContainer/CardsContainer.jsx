import '../CardsContainer/cardsContainer.css';
import { useSelector } from 'react-redux';

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
}
