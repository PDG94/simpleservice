import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Loading/Loading";
import PaginationUsers from "./PaginationViewAllUsers";
import { getUsers } from "../../../redux/actions/usersActions";
import { resedPaged } from "../../../redux/actions/miscActions";
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";

export default function ViewAllUsers() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users.users);
  const [isloading] = useState(false);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  //PAGINATION
  const currentPage = useSelector((state) => state.misc.currentPage);
  const [servicesPerPage] = useState(5);

  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = allUsers.slice(
    indexOfFirstService,
    indexOfLastService
  );

  const paged = (currentPage) => {
    dispatch(resedPaged(currentPage));
  };

  return (
    <>
      <div className="fondoView">
        <div className="navView">
          <NavBarAdmin />
        </div>

        {isloading && <Loading />}
        <div className="containerView">
          <p className="h2View">All Users</p>
          <div className="table table-responsive table-dark">
            {allUsers.length === 0 ? (
              <p>Users not found</p>
            ) : (
              <table className="tableContainer">
                <thead>
                  <tr>
                    <th className="thAll">s/n</th>
                    <th className="thAll">Image</th>
                    <th className="thAll">Name</th>
                    <th className="thAll">Email</th>
                  </tr>
                </thead>
                {currentServices.map((service, index) => {
                  const { id } = service;
                  return (
                    <tbody>
                      <tr key={id} className="table-secondary">
                        <td className="tdView">{index + 1}</td>
                        <td>
                          <img
                            src={service.profilepic}
                            alt="img"
                            style={{ width: "80px" }}
                          ></img>
                        </td>
                        <td className="tdView">{service.name}</td>
                        <td className="tdView">{service?.email}</td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            )}
          </div>
          <PaginationUsers
            servicesPerPage={servicesPerPage}
            allUsers={allUsers.length}
            paged={paged}
          />
        </div>
      </div>
    </>
  );
}
