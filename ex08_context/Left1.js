import Left2 from "./Left2";

import React, { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

const Left1 = () => {
  const { name, onHandleName } = useContext(UserContext);

  return (
    <div>
      <h1>Left1:</h1>
      <h1>Name:{name}</h1>
      <button onClick={() => onHandleName()}>Name Click</button>
      <Left2 />
    </div>
  );
};

export default Left1;
