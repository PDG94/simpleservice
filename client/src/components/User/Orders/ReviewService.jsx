import { useEffect, useState } from "react";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StarsRating from "react-star-rate";
import Loading from "../../Loading/Loading";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../Firebase/config";
import { toast } from "react-toastify";
import { getServiceDetail } from "../../../redux/actions/servicesActions";
import { NavBarUser } from "../../index.js";
import "../Orders/reviewService.css";

export default function ReviewService() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const service = useSelector((state) => state.services.serviceDetail);
  const userID = useSelector((state) => state.users.userID);
  const userEmail = useSelector((state) => state.users.email);
  const navigate = useNavigate();
  const userEmail1 = userEmail.slice(0, -10);
  const [rate, setRate] = useState(0);
  const [review, setReview] = useState("");

  useEffect(() => {
    dispatch(getServiceDetail(id));
  }, [dispatch, id]);

  const submitReview = (e) => {
    e.preventDefault();
    const today = new Date();
    const date = today.toDateString();
    const reviewConfig = {
      userID,
      userEmail1,
      productID: id,
      rate,
      review,
      reviewDate: date,
      createdAt: Timestamp.now().toDate(),
    };
    try {
      addDoc(collection(db, "reviews"), reviewConfig);
      toast.success("Review submitted successfully");
      setRate(0);
      setReview("");
      navigate(`/Detail/${id}`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const isObjectEmpty = (objectName) => {
    return (
      objectName &&
      Object.keys(objectName).length === 0 &&
      objectName.constructor === Object
    );
  };

  return (
    <div className="fondoRev">
      <NavBarUser />
      <div className="reviewService">
        <Link to={`/profile/orders`}>
          <button className="backCr">Back</button>
        </Link>

        <div className="boxRev">
          <br />
          <br />
          <h2 className="h2Rev">Review Services</h2>
          <br />
          {service === null ? (
            <Loading />
          ) : (
            <div className="revName">
              <p className="pRev">
                <b>Service name:</b>{" "}
                {service && !isObjectEmpty(service)
                  ? service[0].servicename
                  : 0}
              </p>
              <div className="profilePic">
                <img
                  src={
                    service && !isObjectEmpty(service)
                      ? service[0].Users[0].profilepic ||
                        service[0].serviceimage
                      : 0
                  }
                  alt={service.name}
                  style={{ width: "200px" }}
                />
              </div>
            </div>
          )}
          <form onSubmit={(e) => submitReview(e)}>
            <div className="stars">
              <div className="ratinRev">Rating :</div>
              <StarsRating
                value={rate}
                onChange={(rate) => {
                  setRate(rate);
                }}
                className="starsRev"
              />
            </div>
            <div className="revArea">
              <label className="revRev">Write your review:</label>
              <textarea
                className="textareaRev"
                value={review}
                required
                onChange={(e) => setReview(e.target.value)}
                cols="80"
                rows="10"
              ></textarea>
            </div>

            <button type="submit" className="subRev">
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
