import React from "react";
import Slat from "./Slat";

const Banner = () => {
  return (
    <div
      class="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://t3.ftcdn.net/jpg/00/89/10/68/360_F_89106812_D8J6Y7KzgLr1FKTgOYZKYSM458BXTCaX.jpg)",
      }}
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content  text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
          <p class="mb-5">
            <span className="text-2xl uppercase text-secondary">Toolex</span> is
            a reputed manufacturer company in{" "}
            <span className="uppercase"> bangladesh </span> specially for{" "}
            <span className="uppercase text-secondary">Carpentry tools</span>.
          </p>

          <button class="btn btn-secondary text-white">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
