import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import SingReview from "./SingReview";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        console.log(reviews);
      });
  }, []);
  return (
    <div>
      <h1>Review</h1>
      <div className="grid gap-10 mx-4 my-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {reviews.map((review) => (
          <SingReview key={review._id} reviews={review}></SingReview>
        ))}
      </div>
    </div>
  );
};

export default Review;
