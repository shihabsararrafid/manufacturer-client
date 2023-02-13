import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("https://manufacturer-server-wxrs.vercel.app/tools")
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
          <Tool
            btnText="Explore More"
            key={tool._id}
            tool={tool}
            len="5"
          ></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
