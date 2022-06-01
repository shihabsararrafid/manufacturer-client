import { useState } from "react";

const useTool = () => {
  const [itemId, setITemId] = useState("");

  return [itemId, setITemId];
};
export default useTool;
