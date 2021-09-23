import React from "react";
import Button from "../atomics/buttons/Button";

const TitleContent = () => {
  return (
    <section className="titleContent ">
      <h2>Escuchado recientemente</h2>
      <div className="buttonGroup">
        <Button iconClass="icon-arrowLeft" state="is-dark" />
        <Button iconClass="icon-arrowRight" state="is-dark" />
      </div>
    </section>
  );
};

export default TitleContent;
