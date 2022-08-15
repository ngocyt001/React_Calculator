import React, { useRef, useEffect, useState } from "react";

import "./calculator.css";

import { btns } from "./btnConfig";
import Button from "../Button";
import Results from "../Results";

const Calculator = () => {
  const btnsRef = useRef(null);

  const [data, setData] = useState({});

  useEffect(() => {
    const btns = Array.from(btnsRef.current.querySelectorAll("Button"));
    btns.forEach((e) => (e.style.height = e.offsetWidth + "px"));
  }, []);

  return (
    <div className="calculator">
      <Results item={data} />
      <div ref={btnsRef} className="calculator__btns">
        {btns.map((item, index) => (
          <Button data={item} key={index} setData={setData} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
