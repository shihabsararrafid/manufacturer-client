import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Review from "./Review";
import Slat from "./Slat";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <Slat></Slat>
      <Review></Review>
    </div>
  );
};

export default Home;
