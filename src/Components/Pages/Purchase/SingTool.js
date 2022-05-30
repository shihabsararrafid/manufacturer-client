import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import Description from "../Home/Description";

const SingTool = () => {
  const [user, loading, error] = useAuthState(auth);
  const _id = useParams();
  console.log(_id.id);
  let des;
  const [tool, setTool] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/purchase/${_id.id}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTool(data);

        des = tool?.des?.split(",");
        console.log(des);
      });
  }, [_id]);
  const handleSubmitBtn = (e) => {
    e.preventDefault();
    const quantity = parseInt(e.target.quantity.value);
    const minQuantity = parseInt(tool.minOrder);
    if (quantity < minQuantity) {
      alert("Quantity cannot be less than min quantity");
    } else {
      const url = `http://localhost:5000/purchase/${_id.id}?email=${user?.email}&quantity=${quantity}&price=${tool.price}&img=${tool.img}&name=${tool.name}`;
      console.log(url);
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
    console.log(quantity);
  };
  return (
    <div>
      <div className="card w-full lg:w-[60%] mx-auto  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            className="rounded-xl w-[100%] lg:w-[200px] h-[200px]"
            src={tool.img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title uppercase text-secondary">{tool.name}</h2>
          <div className="text-center">
            {tool?.desc?.split(",").map((d) => (
              <li>{d}</li>
            ))}
          </div>
          <span className="mb-0 font-bold text-secondary text-left">
            Minimum Order:{tool.minOrder}
          </span>
          <span className="mb-0 font-bold text-secondary text-left">
            Available Quantity:{tool.quantity}
          </span>
          <span className="mb-0  text-left font-bold text-primary">
            Price:${tool.price}
          </span>

          <form onSubmit={handleSubmitBtn} class="form-control">
            <label class="label">
              <span class="label-text">Enter Quantity</span>
            </label>
            <label class="input-group">
              <input
                type="text"
                name="quantity"
                placeholder="Enter Quantity"
                class="input input-bordered"
              />
              <button className="bg-secondary text-white btn">BUY</button>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingTool;
