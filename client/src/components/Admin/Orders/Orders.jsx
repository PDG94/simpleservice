import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resedPaged, storeOrders } from "../../../redux/actions";
import useFetchCollection from "../../CustomHooks/UseFetchCollection";
import Loading from "../../Loading/Loading";
import DashboardPaginado from "../Dashboard/DashboardPaginado";
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import '../Orders/orders.css'


export default function OrderHistory(){

  const orders = useSelector((state)=>state.orderHistory)
  const { data, isLoading } = useFetchCollection("orders");
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const currentPage = useSelector((state) => state.currentPage);
  const [servicesPerPage] = useState(5);
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = orders.slice(
  indexOfFirstService,
  indexOfLastService
  );

  const paged = (currentPage) => {
    dispatch(resedPaged(currentPage));
  };

  
  useEffect(() => {
      dispatch(storeOrders(data));
    }, [dispatch, data]);

    
  const handleClick = (id) =>{
  navigate(`/profile/order-details/${id}`)
  }
  
  return(
      <section>
       <NavBarAdmin />
        <div>
          <h2>All orders</h2>
          <>
            {isLoading && <Loading/>}
            <div>
              {currentServices.length === 0 ? (
                <p>No order found</p>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>s/n</th>
                      <th>Date</th>
                      <th>Order ID</th>
                      <th>Order Amount</th>
                      <th>Order Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentServices.map((order, index) => {
                      const {
                        id,
                        orderDate,
                        orderTime,
                        orderAmount,
                        orderStatus,
                      } = order;
                      return (
                        <tr key={id} onClick={() => handleClick(id)}>
                          <td>{index + 1}</td>
                          <td>
                            {orderDate} at {orderTime}
                          </td>
                          <td>{id}</td>
                          <td>
                            {"$"}
                            {orderAmount}
                          </td>
                          <td>
                            <p>
                              {orderStatus}
                            </p>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </>
        </div>
        <DashboardPaginado
        orders={orders.length}
        servicesPerPage={servicesPerPage}
        paged={paged}/>
      </section>
    );
  };
  