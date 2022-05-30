import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";
const Rating = require("react-rating");
const MyReview = () => {
  const [user, loading, error] = useAuthState(auth);
  const [num, setNum] = useState(5);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handlerating = (number) => {
    setNum(number);
    console.log(number);
  };
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/review?email=${user.email}&name=${user.displayName}&img=${user.photoURL}&start=${num}`;
    console.log(url);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="my-20">
      <h1 className="text-4xl font-mono font-semibold text-primary">
        ADD A REVIEW
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          className="border-2 w-[400px] h-[150px] border-primary rounded-2xl"
          {...register("review", { required: true, maxLength: 250 })}
        />
        {errors.firstName?.type === "required" && (
          <p className="text-red-600">First name is required</p>
        )}
        <br />
        <div class="rating rating-lg">
          <input type="radio" name="rating-9" class="rating-hidden" />
          <input
            onClick={() => handlerating(1)}
            type="radio"
            name="rating-9"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            onClick={() => handlerating(2)}
            type="radio"
            name="rating-9"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            onClick={() => handlerating(3)}
            type="radio"
            name="rating-9"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            onClick={() => handlerating(4)}
            type="radio"
            name="rating-9"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            onClick={() => handlerating(5)}
            type="radio"
            name="rating-9"
            class="mask mask-star-2 bg-orange-400"
          />
        </div>
        <br />
        <input
          className="btn-primary btn text-white rounded-3xl"
          value="POST REVIEW"
          type="submit"
        />
      </form>
    </div>
  );
};

export default MyReview;
