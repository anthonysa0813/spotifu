import React from "react";
import "./barra.css";
import musicImage from "../../images/miniCover.png";
import Button from "../atomics/buttons/Button";

const Barra = () => {
  return (
    <div className="barra">
      <div className="infoMusic ">
        <img src={musicImage} alt="" />
        <div className="infoName ">
          <p>Come and See Me(ft. Drake)</p>
          <span>PARTYNEXTDOOR,Drake</span>
        </div>
        <i className="icon-heart"></i>
      </div>
      <div className="advancedMusic   ">
        <div className="controlls">
          <Button iconClass={"icon-prev"} />
          <Button iconClass={"icon-play"} state={"is-radius"} />
          <Button iconClass={"icon-next"} />
        </div>
        <div className="productionMusic">
          <span>01:12</span>
          <div className="barPlay">
            <div className="barAdv"></div>
          </div>
          <span>03:25</span>
        </div>
      </div>
      <div className="volumnMusic ">
        <i className="icon-volumeUp"></i>
        <div className="barPlay">
          <div className="barAdv"></div>
        </div>
      </div>
    </div>
  );
};

export default Barra;
