import React, { useState } from "react";
import { Link } from "react-router-dom";

const SingReview = (props) => {
  const { img, review, name, start } = props.reviews;
  console.log(img);
  const [rat, setRat] = useState([]);

  return (
    <div>
      <div class="card h-[400px] lg:h-[350px] flex-col md:flex-row items-center card-side bg-base-100 shadow-xl ">
        <figure>
          <img
            className="w-[150px] mask mask-circle text-center"
            src={img}
            alt="Movie"
          ></img>
        </figure>
        <div class="card-body font-mono">
          <h2 class="card-title text-left  uppercase">{name}</h2>
          <p>{review.slice(0, 200)}</p>
          <div class="card-actions justify-center">
            <div class="rating rating-lg">
              <input type="radio" name="rating-9" class="rating-hidden" />
              <input
                type="radio"
                readOnly
                name="rating-9"
                class={`mask mask-star-2 ${
                  start >= 1 ? "bg-orange-400" : "bg-orange-400"
                }`}
              />
              <input
                type="radio"
                name="rating-9"
                readOnly
                class={`mask mask-star-2 ${
                  start >= 2 ? "bg-orange-400" : "bg-gray-200"
                }`}
              />
              <input
                type="radio"
                name="rating-9"
                readOnly
                class={`mask mask-star-2 ${
                  start >= 3 ? "bg-orange-400" : "bg-gray-200"
                }`}
              />
              <input
                type="radio"
                name="rating-9"
                readOnly
                class={`mask mask-star-2 ${
                  start >= 4 ? "bg-orange-400" : "bg-gray-200"
                }`}
              />
              <input
                type="radio"
                name="rating-9"
                readOnly
                class={`mask mask-star-2 ${
                  start >= 5 ? "bg-orange-400" : "bg-gray-200"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingReview;
