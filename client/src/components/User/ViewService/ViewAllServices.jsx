import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { NavBarUser } from "../../index.js";
import { AiOutlineEye, AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { getServiceUser } from "../../../redux/actions/usersActions";
import Notiflix from "notiflix";
import "../ViewService/viewAllServices.css";

export default function ViewAllServices() {
  const serviceUser = useSelector((state) => state.users.serviceUser);
  const length = Object.keys(serviceUser);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const userID = useSelector((state) => state.users.userID);
  const navigate = useNavigate();

  const editarAlert = (id) => {
    Notiflix.Confirm.show(
      "Edit Service",
      "You are about to edit this service",
      "yes",
      "no",
      function okCb() {
        navigate(`/profile/edit/${id}`);
      },
      function cancelCb() {
        navigate();
      },
      {
        width: "320px",
        borderRadius: "8px",
      }
    );
  };

  const confirmDelete = (id) => {
    Notiflix.Confirm.show(
      "Delete Service",
      "Do you really want to remove this service?",
      "Delete",
      "Cancel",
      async function okCb() {
        await axios.put(
          `https://simpleservice-production.up.railway.app/user/service/${id}`,

          { active: false },

          {
            headers: { Authorization: "Bearer " + token },
          }
        );
      },
      function cancelCb() {},
      {
        width: "320px",
        borderRadius: "8px",
      }
    );
  };

  useEffect(() => {
    dispatch(getServiceUser(userID, token));
  }, [dispatch, userID, token]);

  return (
    <div className="viewMainBoxUser">
      <NavBarUser />
      <div>
        <Link to={"/profile"}>
          <button className="backCr">Back</button>
        </Link>
        <div className="containerViewUsers">
          <br />
          <p className="titleViewUser">My Services</p>
          <div className="table table-responsive table-info">
            {length.length === 0 ? (
              <p className="emptyProductP">No product found</p>
            ) : (
              <table className="tableContainer">
                <thead>
                  <tr>
                    <th className="thView">s/n</th>

                    <th className="thView">Service Name</th>

                    <th className="thView">Price</th>

                    <th className="thView">View More</th>

                    <th className="thView">Edit Service</th>

                    <th className="thView">Delete Service</th>
                  </tr>
                </thead>

                <tbody>
                  {serviceUser.Cards?.map((service, index) => {
                    const { id } = service;
                    return (
                      <tr key={id} className="table-secondary">
                        <td className="tdView">{index + 1}</td>

                        <td className="tdView">{service.servicename}</td>

                        <td className="tdView">$ {service.price}</td>

                        <td className="tdView">
                          <Link to={`/profile/my-services/${id}`}>
                            <AiOutlineEye size={30} />
                          </Link>
                        </td>

                        <td className="tdView">
                          <Link className="editView">
                            <AiFillEdit
                              size={30}
                              onClick={() => editarAlert(id)}
                            />
                          </Link>
                        </td>

                        <td className="tdView">
                          <Link>
                            <AiFillDelete
                              size={30}
                              onClick={() => confirmDelete(id)}
                            />
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
