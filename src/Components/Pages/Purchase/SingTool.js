import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import useAvailable from "../../Hooks/useAvailable";
import Description from "../Home/Description";

const SingTool = () => {
  const [user, loading, error] = useAuthState(auth);
  const _id = useParams();
  console.log(_id.id);
  let des;
  const [tool, setTool] = useState({});

  useEffect(() => {
    const url = `https://manufacturer-server-wxrs.vercel.app/purchase/${_id.id}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTool(data);
        setAvailable(data.quantity);
        des = tool?.des?.split(",");
        console.log(des);
      });
  }, [_id]);
  const [available, setAvailable] = useAvailable(`${tool?.quantity}`);
  const handleSubmitBtn = (e) => {
    e.preventDefault();
    const quantity = parseInt(e.target.quantity.value);
    const minQuantity = parseInt(tool.minOrder);
    const newQuan = parseInt(tool.quantity) - quantity;

    tool.quantity = newQuan;
    if (quantity < minQuantity) {
      alert("Quantity cannot be less than min quantity");
    } else {
      setAvailable(newQuan);
      const url = `https://manufacturer-server-wxrs.vercel.app/purchase/${_id.id}?email=${user?.email}&quantity=${quantity}&price=${tool.price}&img=${tool.img}&name=${tool.name}&available=${newQuan}`;
      console.log(url);
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });

      console.log(quantity);
    }
  };
  const updateQuantity = () => {
    console.log("updating");
    const anotherUrl = `https://manufacturer-server-wxrs.vercel.app/tools/?id=${_id.id}&available=${available}`;
    console.log(anotherUrl);
    fetch(anotherUrl, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <h1 className="text-2xl font-mono font-bold">
        HeY , Welcome{" "}
        <span className="text-secondary">
          {user?.displayName} <br />
          {user?.email}
        </span>
      </h1>
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
            Available Quantity:{available}
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
              <button
                onClick={() => updateQuantity}
                className="bg-secondary text-white btn"
              >
                BUY
              </button>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingTool;
