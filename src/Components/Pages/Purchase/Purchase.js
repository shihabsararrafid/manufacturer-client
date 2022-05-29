import React, { useEffect, useState } from "react";
import Tool from "../Home/Tool";

const Purchase = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("https://toolex-factory.herokuapp.com/tools")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div>
      <div className="grid mx-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {tools.map((tool) => (
          <Tool
            btnText="Purchase Now"
            key={tool._id}
            tool={tool}
            len="5"
          ></Tool>
        ))}
      </div>
    </div>
  );
};

export default Purchase;
