import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div>
      <h1 className="text-6xl mx-7 my-9 uppercase font-bold text-secondary lg:text-left text-center">
        Tools
      </h1>
      <div className="grid mx-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {tools.map((tool) => (
          <Tool tool={tool} len="5"></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
