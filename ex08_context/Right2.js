import Right3 from "./Right3";

import React, { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import { ThemeContext } from "./contexts/ThemeContext";

const Right2 = () => {
  const { name } = useContext(UserContext);
  const { number } = useContext(ThemeContext);

  return (
    <div>
      <h1>Right2 : </h1>
      <h1>Name: {name}</h1>
      <h1>Number: {number}</h1>
      <Right3 />
    </div>
  );
};

export default Right2;
