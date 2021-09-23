import React from "react";
import "./aside.css";
import logo from "../../images/spotifu-logo.png";
import Header from "../header/Header";

const Aside = () => {
  return (
    <aside>
      <img className="logo" src={logo} height={32} alt="Logo de spotifu" />
      <Header />
    </aside>
  );
};

export default Aside;
