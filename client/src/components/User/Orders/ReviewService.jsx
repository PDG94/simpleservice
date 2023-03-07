import { useEffect, useState } from "react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StarsRating from "react-star-rate";
import Loading from "../../Loading/Loading";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../Firebase/config";
import { toast } from "react-toastify";
import { getServiceDetail } from "../../../redux/actions/servicesActions";

export default function ReviewService() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const service = useSelector((state) => state.services.serviceDetail);
  const userID = useSelector((state) => state.users.userID);
  const userEmail = useSelector((state) => state.users.email);
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
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section>
      <div className={""}>
        <h2>Review Products</h2>
        {service === null ? (
          <Loading />
        ) : (
          <>
            <Link to={`/profile/orders`}>
              <button>Back</button>
            </Link>
            <p>
              <b>Product name:</b> {service.servicename}
            </p>
            <img
              src={service["Users.profilepic"]}
              alt={service.name}
              style={{ width: "200px" }}
            />
          </>
        )}
        <form onSubmit={(e) => submitReview(e)}>
          <label>Rating:</label>
          <StarsRating
            value={rate}
            onChange={(rate) => {
              setRate(rate);
            }}
          />
          <label>Review</label>
          <textarea
            value={review}
            required
            onChange={(e) => setReview(e.target.value)}
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit" className="--btn --btn-primary">
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
}
