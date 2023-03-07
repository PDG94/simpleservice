import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import Notiflix from "notiflix";
import PaginationAdmin from "../PaginationAdmin/PaginationAdmin";
import { getServices } from "../../../redux/actions/servicesActions";
import { removeUsers } from "../../../redux/actions/usersActions";
import { resedPaged } from "../../../redux/actions/miscActions";
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import "./viewService.css";

export default function ViewServices() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const allServices = useSelector((state) => state.services.services);
  const [isloading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  //PAGINATION
  const currentPage = useSelector((state) => state.misc.currentPage);
  const [servicesPerPage] = useState(5);

  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = allServices.slice(
    indexOfFirstService,
    indexOfLastService
  );

  const paged = (currentPage) => {
    dispatch(resedPaged(currentPage));
  };

  const deleteS = (e) => {
    e.preventDefault();
    dispatch(removeUsers(id));
  };
  const editarAlert = (id, CategoryId) => {
    Notiflix.Confirm.show(
      "Edit Service",
      "You are about to edit this service",
      "yes",
      "no",
      function okCb() {
        navigate(`/admin/edit/${id}/${CategoryId}`);
      },
      function cancelCb() {
        alert("If you say so...");
        navigate();
      },
      {
        width: "320px",
        borderRadius: "8px",
        // textDecoration : "none",
        // titleColor: "orangered"
      }
    );
  };

  const confirmDelete = (id) => {
    Notiflix.Confirm.show(
      "Delete Service",
      "You are about to delete this service",
      "Delete",
      "Cancel",
      function okCb() {
        deleteS(id);
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

  return (
    <>
      <div className="fondoView">
        <div className="navView">
          <NavBarAdmin />
        </div>

        {isloading && <Loading />}
        <div className="containerView">
          <p className="h2View">All Services</p>
          <div className="table table-responsive table-dark">
            {allServices.length === 0 ? (
              <p>No product found</p>
            ) : (
              <table className="tableContainer">
                <thead>
                  <tr>
                    <th className="thView">
                      {"  "}
                      s/n
                    </th>
                    <th className="thView">Image</th>
                    <th className="thView">Name</th>
                    <th className="thView">Service</th>
                    <th className="thView">Price</th>
                    <th className="thView">Actions</th>
                  </tr>
                </thead>
                {currentServices.map((service, index) => {
                  const { id, price, CategoryId } = service;
                  return (
                    <tbody>
                      <tr key={id} className="table-secondary">
                        <td className="tdView">{index + 1}</td>
                        <td>
                          <img
                            src={service["Users.profilepic"]}
                            alt="img"
                            style={{ width: "80px" }}
                          ></img>
                        </td>
                        <td className="tdView">{service["Users.name"]}</td>
                        <td className="tdView">{service?.servicename}</td>
                        <td className="tdView">{`${price}`}</td>
                        <td>
                          <Link className="editView">
                            <FaEdit
                              color="green"
                              onClick={() => editarAlert(id, CategoryId)}
                            />
                          </Link>

                          <Link className="bin">
                            <BsTrash
                              color="red"
                              onClick={() => confirmDelete(id)}
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
          <PaginationAdmin
            servicesPerPage={servicesPerPage}
            allServices={allServices.length}
            paged={paged}
          />
        </div>
      </div>
    </>
  );
}
