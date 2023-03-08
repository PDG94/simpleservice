import { NavBar, Footer, Loading } from "../index";
import {
  getServiceDetail,
  cleanState,
} from "../../redux/actions/servicesActions";
import {
  addToExinstingCart,
  addNewCart,
  reduceCartQuantity,
  removeCard,
  subTotalQuant,
} from "../../redux/actions/cartActions";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../Detail/detail.css";
import ser from "../Imagenes/ser.png";
import { MdStar } from "react-icons/md";
import { FiDollarSign } from "react-icons/fi";
import ShowOnLogin from "../HiddenLinks/ShowOnLogin";
import useFetchCollection from "../CustomHooks/UseFetchCollection";
import StarsRating from "react-star-rate";
import Reviews from "../Imagenes/Reviews.png";

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { data } = useFetchCollection("reviews");
  const [readMore, setReadmore] = useState(false);
  
  

  const filterReviews = data.filter((data) => data.productID === id);

  const cart = cartItems.find((cart) => cart.id === id);
  const isCartAdded = cartItems.findIndex((cart) => {
    return cart.id === id;
  });

  const serviceDetail = useSelector((state) => state.services.serviceDetail);

  useEffect(() => {
    dispatch(getServiceDetail(id));
    return () => {
      dispatch(cleanState());
    };
  }, [dispatch, id]);

  const calculateTotalQuantity = () => {
    const array1 = [];
    if (cartItems) {
      // Agregamos un control de flujo para verificar si "cartItems" existe
      cartItems.map((item) => {
        const { cartQuantity } = item;
        const quantity = cartQuantity;
        return array1.push(quantity);
      });
    }
    const totalQuantity = array1.reduce((a, b) => {
      return a + b;
    }, 0);
    return totalQuantity;
  };

  const getCardIndex = (payload) => {
    return cartItems.findIndex((item) => item.id === payload.id);
  };

  const addToCart1 = (service) => {
    const index = getCardIndex(service);
    if (index >= 0) {
      dispatch(addToExinstingCart(service, index));
    } else {
      dispatch(addNewCart(service));
    }
    dispatch(subTotalQuant(calculateTotalQuantity()));
  };

  const decreaseCart1 = (service) => {
    const index = getCardIndex(service);
    if (cartItems[index].cartQuantity > 1) {
      dispatch(reduceCartQuantity(service, index));
    } else {
      dispatch(removeCard(service));
    }
    dispatch(subTotalQuant(calculateTotalQuantity()));
  };

  return (
    <div className="details">
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
                <div className="boxCardDetail">
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
                            {isCartAdded < 0 ? null : (
                              <div className="cantBox">
                                <button
                                  className="--btn"
                                  onClick={() => decreaseCart1(service)}
                                >
                                  -
                                </button>
                                <p className="pqDet">
                                  <b>{cart.cartQuantity}</b>
                                </p>
                                <button
                                  className="--btnplus"
                                  onClick={() => addToCart1(service)}
                                >
                                  +
                                </button>
                              </div>
                            )}
                            <div className="pBox">
                              <button
                                className="btnAdd"
                                onClick={() => addToCart1(service)}
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
                    {service?.description || "description not available"}
                    {readMore
                      ? service.description
                      : `${service.description.substring(0, 100)}...`}
                    <div className="description" style={{ marginTop: "5%" }}>
                      <button onClick={() => setReadmore(!readMore)}>
                        {readMore ? "show less" : "show more"}{" "}
                      </button>
                      <div
                        className="description"
                        style={{ marginTop: "25%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="cardDetailReview">
                  <div className="reviewsBox">
                    {filterReviews.length === 0 ? (
                      <div className="emptyReviews">
                        <br />
                        <p className="pEmptyReview">
                          {" "}
                          There are no reviews for this service yet
                        </p>
                        <br />
                      </div>
                    ) : (
                      <div className="allReviews">
                        {filterReviews.map((item, index) => {
                          const { rate, review, reviewDate, userEmail1 } = item;
                          return (
                            <div className="allRevBox">
                              <StarsRating value={rate} />
                              <img
                                className="imgReviews"
                                src={Reviews}
                                alt="logoReview"
                              />
                              <div>
                                {" "}
                                <p className="sReviews">{review}</p>
                                <span className="sReviews">
                                  <b>{reviewDate}</b>
                                </span>
                                <br />
                                <span className="sReviews">
                                  <br />
                                  By
                                  <b>
                                    {"  "}
                                    {userEmail1 || "Unknown User"}
                                  </b>
                                  <br />
                                </span>
                                <br />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
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
