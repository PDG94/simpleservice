import React, {useEffect, useState} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import NavBarUser from "../NavBarUser/NavBarUser";
import { AiOutlineEye, AiFillDelete} from "react-icons/ai";
import { Link } from "react-router-dom";
import { getServiceUser } from "../../../redux/actions";
import Notiflix from "notiflix";

export default function ViewAllServices(){

  
const serviceUser = useSelector((state)=>state.serviceUser)
// console.log(serviceUser);
const length = Object.keys(serviceUser)
const dispatch= useDispatch()
const token = localStorage.getItem("token");
const userID = useSelector((state) => state.userID)


  const confirmDelete = (id) => {
    
    Notiflix.Confirm.show(
      "Delete Service",
      "Do you really want to remove this service?",
      "Delete",
      "Cancel",
     async function okCb() {
        await axios.put(
          `https://simpleservice-production.up.railway.app/user/service/${id}`,
          {active: "false"},
          {
            headers: { Authorization: "Bearer " + token },
          }
        );
      },
      function cancelCb() {
        alert("If you say so...");
      },
      {
        width: "320px",
        borderRadius: "8px",
        // textDecoration : "none",
        // titleColor: "orangered"
      }
    );
  };

  useEffect(()=>{
    dispatch(getServiceUser(userID, token))
  }, [dispatch, userID, token])


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
                  <th className="thView">Delete Service</th>
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
                      <td className="tdView">
                      <Link to={`/profile/my-services/${id}`}>
                        <AiOutlineEye/>
                      </Link>
                      </td>
                      <td className="tdView">
                      <Link>
                      <AiFillDelete
                        onClick={()=>confirmDelete(id)}
                       />
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