import React from "react";
import { Link } from "react-router-dom";
import "./Description";
import Description from "./Description";
const Tool = ({ tool, len, btnText }) => {
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
        <span className="mb-0 text-left">
          Available Quantity:{tool.quantity}
        </span>
        <span className="mb-0 text-left font-bold text-primary">
          Price:${tool.price}
        </span>
        <div className="card-actions">
          <Link to={`/purchase/${tool._id}`}>
            {" "}
            <button className="btn btn-secondary text-white">{btnText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tool;
