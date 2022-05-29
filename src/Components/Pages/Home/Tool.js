import React from "react";
import "./Description";
import Description from "./Description";
const Tool = ({ tool, len }) => {
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
          <button className="btn btn-secondary text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
