import React from "react";
import "./button.css";

const Button = ({ iconClass, state }) => {
  return (
    <button className={state}>
      <i className={`${iconClass} `}></i>
    </button>
  );
};

export default Button;
