import { useState } from "react";
import React from "react";
import Func from "./class";

const Rct = () => {
  const [test, setTest] = useState("pdp");
  setTimeout(() => {
    setTest("IT");
  }, 5000);
  return (
    <div>
      <Func title={test} />
    </div>
  );
};
export default Rct;
