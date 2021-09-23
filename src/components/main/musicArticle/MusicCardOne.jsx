import React from "react";
import portada from "../../../images/Frame.png";
import "./musicArticle.css";

const MusicCardOne = ({ title, imagen }) => {
  return (
    <div className="themeInfo  ">
      <img src={imagen} alt="" />
      <div className="themeInfo-item">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default MusicCardOne;
