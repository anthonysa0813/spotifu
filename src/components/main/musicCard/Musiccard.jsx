import React from "react";
import "./musicCard.css";
import image from "../../../images/Frame.png";

const Musiccard = ({ imagen, title, musics }) => {
  return (
    <div className="cardContent ">
      <img src={imagen} alt="" />
      <div className="cardInfo">
        <h3>{title}</h3>
        <p>{musics}</p>
      </div>
    </div>
  );
};

export default Musiccard;
