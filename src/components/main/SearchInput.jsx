import React from "react";
import Button from "../atomics/buttons/Button";
import "./searchInput.css";
const SearchInput = () => {
  return (
    <section className="searchSection">
      <Button iconClass="icon-arrowLeft" state="is-dark" />
      <Button iconClass="icon-arrowRight" state="is-dark" />
      <div className="searchContent">
        <i className="icon-search"></i>
        <input type="text" placeholder="Artistas, canciones ó podcats" />
      </div>
    </section>
  );
};

export default SearchInput;
