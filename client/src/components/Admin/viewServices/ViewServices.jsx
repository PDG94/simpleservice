import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { BsTrash } from "react-icons/bs"
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../Loading/Loading";

//import { deleteService } from "../../../redux/actions";

import Notiflix from "notiflix";

// import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";


export default function ViewServices() {

  const allServices = useSelector((state) => state.services);
  const [isloading, ] = useState(false)
  const navigate = useNavigate()

const deleteS=()=>{ 

   }

   const editarAlert=(id)=>{
    Notiflix.Confirm.show(
      'Edit Service',
      'You are about to edit this service',
      'yes',
      'no',
      function okCb() {
        alert("OK")
      },
      function cancelCb() {
        alert('If you say so...');
        navigate()
      },
      {
        width: '320px',
        borderRadius: '8px',
        // textDecoration : "none",
        // titleColor: "orangered"
      },
    );
   }
   
   const confirmDelete=(id)=>{
    Notiflix.Confirm.show(
      'Delete Service',
      'You are about to delete this service',
      'Delete',
      'Cancel',
      function okCb() {
        deleteS(id)
      },
      function cancelCb() {
        alert('If you say so...');
      },
      {
        width: '320px',
        borderRadius: '8px',
        // textDecoration : "none",
        // titleColor: "orangered"
      },
    );
   }
  
  return (
    <>
    {isloading && <Loading/>}
    <div>
      <h2>All Services</h2>
      <div className="navbar">
        {allServices.length === 0 ?(
          <p>No product found</p>
        ):(
          <table>
            <thead>
            <tr>
              <th>s/n</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
            </thead>
            {allServices.map((service,index)=>{
            const{id,username,userimage,price}=service;
            return (
              <tbody>
              <tr key={id}>
                <td>
                  {index+1}
                  </td>
                <td>
                  <img src={userimage} alt="img" style={{width:"100px"}}></img>
                </td>
                <td>
                  {username}
                </td>
                <td>
                  {`$${price}`}
                </td>
                <Link to={`/admin/add-service/${id}`}>
                <FaEdit color="green" onClick={editarAlert}/>
                </Link>
                <Link>
                <BsTrash color="red"  onClick={confirmDelete}/>
                </Link>
                </tr>
                </tbody>
            )
})}
          
          </table>
        )
        }
        
      </div>
    </div>
    </>
  );
}
