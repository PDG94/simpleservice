import { NavBar, Footer, Loading } from "../index";
import {
  getServiceDetail,
  clearName,
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
import { FiDollarSign } from "react-icons/fi";
import ShowOnLogin from "../HiddenLinks/ShowOnLogin";
import ShowOnLogout from "../HiddenLinks/ShowOnLogout";
import useFetchCollection from "../CustomHooks/UseFetchCollection";
import StarsRating from "react-star-rate";

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { data } = useFetchCollection("reviews");
  const serviceDetail = useSelector((state) => state.services.serviceDetail);
  const [readMore, setReadmore] = useState(false);

  useEffect(() => {
    dispatch(getServiceDetail(id));
    return () => {
      dispatch(clearName());
    };
  }, [dispatch, id]);

  const isObjectEmpty = (objectName) => {
    return (
      objectName &&
      Object.keys(objectName).length === 0 &&
      objectName.constructor === Object
    );
  };

  // if (serviceDetail && !isObjectEmpty(serviceDetail)) {
  // }
  const numeroDePalabras =
    serviceDetail && !isObjectEmpty(serviceDetail)
      ? serviceDetail[0].description.split(" ").length
      : 0;

  const filterReviews = data.filter((data) => data.productID === id);
  const array = [];
  for (let i = 0; i < filterReviews.length; i++) {
    array.push(filterReviews[i].rate);
  }
  const promedio = array.length
    ? array.reduce((total, review) => total + review) / array.length
    : 0;
  const slice3 = promedio.toString().slice(0, 3);

  const cart = cartItems.find((cart) => cart.id === id);
  const isCartAdded = cartItems.findIndex((cart) => {
    return cart.id === id;
  });

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
          <button className="btnH">Back</button>
        </Link>
        {serviceDetail.length ? (
          serviceDetail?.map((service) => {
            return (
              <div className="supremeBox">
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
                              <hr />
                              <b className="bPromedio">{slice3}</b>
                              <br />
                              <StarsRating value={promedio} />
                              <br />
                              <h5>{array.length} reviews </h5>
                              <hr />
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
                          <ShowOnLogout>
                            <Link to="/login">
                              <button className="btnAdd2">
                                Sign in to buy the product
                              </button>
                            </Link>
                          </ShowOnLogout>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <div className="description" style={{ marginTop: "10%" }}>
                      {numeroDePalabras < 100
                        ? service?.description || "description not available"
                        : readMore
                        ? service?.description || "description not available"
                        : `${service.description.substring(0, 450)}...`}
                      {numeroDePalabras >= 100 && (
                        <div
                          className="description"
                          style={{ marginTop: "5%" }}
                        >
                          <button
                            className="btnMoreDetail"
                            onClick={() => setReadmore(!readMore)}
                          >
                            {readMore ? "show less" : "show more"}
                          </button>
                        </div>
                      )}
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
                              <div>
                                <br />
                                <StarsRating value={rate} />
                              </div>
                              {/* <img
                                className="imgReviews"
                                src={Reviews}
                                alt="logoReview"
                              /> */}
                              <div className="infoReviewDetail">
                                <br /> <p className="sReviews">{review}</p>
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
                        <br />
                      </div>
                    )}
                  </div>
                </div>
                <div></div>
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
