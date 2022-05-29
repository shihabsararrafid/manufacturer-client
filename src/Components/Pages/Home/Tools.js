import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("https://toolex-factory.herokuapp.com/tools")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div className="my-10">
      <h1 className="text-6xl mx-7 my-9 uppercase font-bold text-secondary lg:text-left text-center">
        Tools
      </h1>
      <div className="grid mx-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {tools.slice(0, 6).map((tool) => (
          <Tool key={tool._id} tool={tool} len="5"></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
