import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import useAvailable from "../../Hooks/useAvailable";
import useTool from "../../Hooks/useTool";
import "./Description";
import Description from "./Description";
const Tool = ({ tool, len, btnText }) => {
  const [user, loading, error] = useAuthState(auth);
  const [admin, adminloading] = useAdmin(user);
  const [available, setAvailable] = useAvailable(`${tool.quantity}`);
  const [itemId, setITemId] = useTool();
  const handleDelete = (id) => {
    console.log(id);
    const confirm = window.confirm("Are Sure To delete ");
    if (confirm) {
      const url = `https://manufacturer-server-wxrs.vercel.app/tools?id=${id}`;
      console.log(url);
      fetch(url, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Succesfully Delted");
          setITemId(id);
          console.log(itemId);
        });
    }
  };
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          className="rounded-xl w-[100%] lg:w-[200px] h-[200px]"
          src={tool.img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title uppercase text-secondary">{tool.name}</h2>
        <Description len={len} des={tool.desc}></Description>
        <span className="mb-0 text-left">Minimum Order:{tool.minOrder}</span>
        <span className="mb-0 text-left">Available Quantity:{available}</span>
        <span className="mb-0 text-left font-bold text-primary">
          Price:${tool.price}
        </span>
        <div className="card-actions">
          {admin ? (
            <button
              onClick={() => handleDelete(`${tool._id}`)}
              className="btn btn-secondary text-white"
            >
              Delete Product
            </button>
          ) : (
            <Link to={`/purchase/${tool._id}`}>
              {" "}
              <button className="btn btn-secondary text-white">
                {btnText}
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tool;
