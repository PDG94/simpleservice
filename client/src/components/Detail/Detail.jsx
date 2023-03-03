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
import useFetchCollection from "../CustomHooks/UseFetchCollection";
import StarsRating from "react-star-rate";
import Reviews from "../Imagenes/Reviews.png"

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const cartItems = useSelector((state) => state.cartItems);
  const {data} = useFetchCollection("reviews")

  const filterReviews = data.filter((data)=>data.productID === id)
  console.log(filterReviews);
 

  const cart = cartItems.find((cart) => cart.id === id);
  const isCartAdded = cartItems.findIndex((cart) => {
    return cart.id === id;
  });
  console.log(isCartAdded);

  const serviceDetail = useSelector((state) => state.serviceDetail);

  useEffect(() => {
    dispatch(getServicesDetail(id));
    return () => {
      dispatch(cleanState());
    };
  }, [dispatch, id]);

  const addToCart1 = (service) => {
    dispatch(addToCart(service));
    dispatch(calculateTotalQuantity());
  };

  const decreaseCart1 = (service) => {
    dispatch(decreaseCart(service));
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
        <div className="cardDetailReview">
          <div>
            <img className="imgReviews" src={Reviews} alt="logoReview" />
          </div>
          <div className="reviewsBox">
        {filterReviews.length===0 ? 
              (<div className="emptyReviews">
                <br/>
                <p className="pEmptyReview"> There are no reviews for this service yet</p>
                <br/>
              </div>
        ):(
          <div className="allReviews">
          {filterReviews.map((item,index)=>{
            const{rate, review, reviewDate ,userEmail} = item
            return(
              <div className="allRevBox">
                <StarsRating
                value={rate}/>
                <p className="sReview">{review}</p>
                <span className="sReview">
                  <b >{reviewDate}</b>
                </span>
                <br/>
                <span className="sReview">
                  <br />
                  By
                  <b>{"  "}{userEmail || "Unknown User"}</b>
                <br/>
                </span>
                <br/>
              </div>
            )
          })}
          </div>
        )
            }
            </div>
      </div>
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
