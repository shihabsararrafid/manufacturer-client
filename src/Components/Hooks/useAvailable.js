import { useState } from "react";

const useAvailable = (quantity) => {
  const [available, setAvailable] = useState(`${quantity}`);

  return [available, setAvailable];
};
export default useAvailable;
