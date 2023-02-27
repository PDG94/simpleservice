import { NavBar, Footer, Loading } from "../index";
import {
  getServicesDetail,
  cleanState,
  addToCart,
  decreaseCart,
  calculateTotalQuantity,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../Detail/detail.css";
import ser from "../Imagenes/ser.png";
import { MdStar } from "react-icons/md";
import { FiDollarSign } from "react-icons/fi";
import ShowOnLogin from "../HiddenLinks/ShowOnLogin";

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const cartI = useSelector((state) => state.cartItems);

  const cart = cartI.findIndex((cart) => cart.id === id);
  console.log(cart);

  const serviceDetail = useSelector((state) => state.serviceDetail);
  // const allServices = useSelector((state)=>state.services)

  useEffect(() => {
    dispatch(getServicesDetail(id));
    return () => {
      dispatch(cleanState());
    };
  }, [dispatch, id]);

  const addToCart1 = (id) => {
    dispatch(addToCart(id));
  };

  const decreaseCart1 = (id) => {
    dispatch(decreaseCart(id));
    dispatch(calculateTotalQuantity());
  };

  return (
    <div className="detail">
      <NavBar />
      <div className="detailContainer">
        <Link
          className="linkDet"
          to="/Services"
          style={{
            textDecoration: "none",
          }}
        >
          <button className="btnH">Go Back</button>
        </Link>
        {serviceDetail.length ? (
          serviceDetail.map((service) => {
            return (
              <div className="mainDetail">
                <div className="left">
                  <div className="infoDetail" key={service.id}>
                    <h1 className="nameDetail">
                      {service?.Users.map((element) => element.name) ||
                        "name not found"}
                    </h1>
                    <div className="imgBoxDet">
                      <img
                        className="imgDet"
                        src={service?.Users.map(
                          (element) => element.profilepic
                        )}
                        alt=""
                      />
                    </div>
                    <div className="moreDetail">
                      <p className="serviceDetail">
                        <img className="imgDetail" src={ser} alt="" />
                        {service?.servicename}
                      </p>
                      <div className="ratingDetail">
                        <label className="iconDetail">
                          <MdStar />
                        </label>{" "}
                        <p className="rat">{service?.rating}</p>
                      </div>
                      <p className="priceDetail">
                        {" "}
                        Price
                        <label className="iconDetail">
                          {"   "}
                          <FiDollarSign />
                        </label>
                        {service?.price}
                      </p>

                      <ShowOnLogin>
                        <div className="addBox">
                          <div className="cantBox">
                            <button
                              className="--btn"
                              onClick={() => decreaseCart1(id)}
                            >
                              -
                            </button>
                            <p>
                              <b>{cart.cartQuantity}</b>
                            </p>
                            <button
                              className="--btnplus"
                              onClick={() => addToCart1(id)}
                            >
                              +
                            </button>
                          </div>
                          <div className="pBox">
                            <button
                              className="btnAdd"
                              onClick={() => addToCart1(id)}
                            >
                              ADD TO CART
                            </button>
                          </div>
                        </div>
                      </ShowOnLogin>
                    </div>
                  </div>
                </div>
                <div className="right">
                  {service.description.length > 200 ? (
                    <div className="description" style={{ marginTop: "5%" }}>
                      {service?.description || "description not available"}
                    </div>
                  ) : (
                    <div className="description" style={{ marginTop: "25%" }}>
                      {service?.description || "description not available"}
                    </div>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <Loading />
        )}
      </div>
      <Footer />
    </div>
  );
}
