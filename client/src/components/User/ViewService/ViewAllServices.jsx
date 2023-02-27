import React from "react";
import { useSelector } from "react-redux";
import NavBarUser from "../NavBarUser/NavBarUser";
import { AiOutlineEye} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function ViewAllServices(){
const serviceUser = useSelector((state)=>state.serviceUser)
const length = Object.keys(serviceUser)
console.log(serviceUser);

return (
    <>
      <NavBarUser />
    
      <div className="containerView">
        <p className="h2">My Services</p>
        <div className="table table-responsive table-dark">
          {length.length === 0 ? (
            <p>No product found</p>
          ) : (
            <table className="tableContainer">
              <thead>
                <tr>
                  <th className="thView">
                    {"  "}
                    s/n
                  </th>
                  <th className="thView">Service Name</th>
                  <th className="thView">Price</th>
                  <th className="thView">View More</th>
    
                </tr>
              </thead>
              {serviceUser.Cards?.map((service, index) => {
                const {id} = service
                return (
                  <tbody>
                    <tr key={id} className="table-secondary">
                      <td className="tdView">{index + 1}</td>
                      <td className="tdView">{service.servicename}</td>
                      <td className="tdView">{service.price}</td>
                      <td className="">
                      <Link to={`/profile/my-services/${id}`}>
                        <AiOutlineEye/>
                      </Link>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          )}
        </div>
      </div>
    </>
  );
}








//     return(
//         <>
//             <NavBarUser/>
            
//             {
//                 serviceUser.Cards?.map((e)=>{
//                     return(
//                         <div className="containerView">
//                             <h1>Service Name: {e.servicename}</h1>
//                             <h1>Price: {e.price}</h1>
//                             <h1>Description: {e.description}</h1>
//                         </div>
//                     )
//                 })  

//             }       
//         </>
//     )
// }