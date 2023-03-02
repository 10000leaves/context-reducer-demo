import { useContext } from "react";
import { UserCount } from "./App";

const ComponentC = () => {
  const count = useContext(UserCount);
  return (
    <div>
      <p>Componet C: {count}</p>
    </div>
  );
};

export default ComponentC;
