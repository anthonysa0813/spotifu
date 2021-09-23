import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="menuContain  ">
          <li className="menuItem is-active ">
            <i className="icon-home "></i>
            <span>Inicio</span>
          </li>
          <li className="menuItem  ">
            <i className="icon-search"></i>
            <span>Inicio</span>
          </li>
          <li className="menuItem  ">
            <i className="icon-creditCard"></i>
            <span>Inicio</span>
          </li>
        </ul>
      </nav>
      <nav className="library ">
        <span>Tu Biblioteca</span>
        <ul>
          <li>Creada para ti</li>
          <li>Escuchado recientemente</li>
          <li>Tus Me Gusta</li>
        </ul>
      </nav>
      <nav className="classList">
        <span>Playlists</span>
        <ul>
          <li>Lo mejor de los mejor</li>
          <li>Bring me the horizon</li>
          <li>Red Hot Chilli Peppers</li>
          <li>Scorpions</li>
          <li>Más populares de la semana</li>
          <li>Más populares de la semana</li>
          <li>Audio Libros</li>
          <li>30 Seconds to Mars</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
