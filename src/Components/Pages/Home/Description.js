import React from "react";

const Description = ({ des, len }) => {
  const desDetail = des.split(",").slice(0, len);
  return (
    <div className="ml-5 text-left">
      {desDetail.map((detail) => (
        <li>{detail}</li>
      ))}
    </div>
  );
};

export default Description;
