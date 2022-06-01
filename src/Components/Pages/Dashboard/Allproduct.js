import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import useTool from "../../Hooks/useTool";
import Tool from "../Home/Tool";
import Tools from "../Home/Tools";

const Allproduct = () => {
  const [itemId, setITemId] = useTool();
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("https://toolex-factory.herokuapp.com/tools")
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
        if (itemId) {
          const newData = tools.filter((tool) => tool._id !== itemId);
          setTools(newData);
        }
      });
  }, [itemId, tools]);
  return (
    <div className="my-10">
      <h1 className="lg:text-6xl  text-2xl mx-7 my-9 uppercase font-bold text-secondary lg:text-center text-center">
        Manage All Products
      </h1>
      <div className="grid mx-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {tools.map((tool) => (
          <Tool
            btnText="Delete Product"
            key={tool._id}
            tool={tool}
            len="5"
          ></Tool>
        ))}
      </div>
    </div>
  );
};

export default Allproduct;
