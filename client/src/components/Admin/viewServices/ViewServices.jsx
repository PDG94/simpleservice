import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { BsTrash } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import Notiflix from "notiflix";
import PaginationAdmin from "../PaginationAdmin/PaginationAdmin";
import {deleteUser, resedPaged } from "../../../redux/actions";
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";


export default function ViewServices() {
  const dispatch = useDispatch();
  const{id}=useParams()
  const allServices = useSelector((state) => state.services);

  const [isloading, ] = useState(false)
  const navigate = useNavigate()

  //PAGINATION
  const currentPage = useSelector((state) => state.currentPage);
  const [servicesPerPage] = useState(5)

  const indexOfLastService = currentPage*servicesPerPage
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = allServices.slice(indexOfFirstService,indexOfLastService)

  const paged = (currentPage) => {
    dispatch(resedPaged(currentPage));
  };

const deleteS=(e)=>{ 
e.preventDefault()
dispatch(deleteUser(id))
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
        <NavBarAdmin/>
    {isloading && <Loading/>}
    <div className="">
      <h2>All Services</h2>
      <div className="table">
        {allServices.length === 0 ?(
          <p>No product found</p>
        ):(
          <table>
            <thead>
            <tr>
              <th>s/n</th>
              <th>Image</th>
              <th>Name</th>
              <th>Service</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
            </thead>
            {currentServices.map((service,index)=>{
            const{id,price}=service;
            return (
              <tbody>
              <tr key={id}>
                <td>
                {index+1}
                </td>
                <td>
                <img src={service["Users.profilepic"]} alt="img" style={{width:"100px"}}></img>
                </td>
                <td>
                {service["Users.name"]}
                </td>
                <td>
                {service?.servicename}
                </td>
                <td>
                {`${price}`}
                </td>
                <Link to={`/admin/edit/${id}`}>
                <FaEdit color="green" onClick={editarAlert}/>
                </Link>
                <Link >
                <BsTrash color="red" onClick={() => confirmDelete(id)} />
                </Link>
                </tr>
                </tbody>
            )
            })}
          </table>
        )}
      </div>
      <PaginationAdmin
      servicesPerPage={servicesPerPage}
      allServices={allServices.length}
      paged={paged}
      />
    </div>
    </>
  );
}
