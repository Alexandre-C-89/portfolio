import React from "react";
import "../style/components/_Nav.scss";

function Nav() {
    return (
      <nav className="navbar">
        <div className="navbar__logo">Logo</div>
        <ul className="navbar__links">
          <li className="navbar__item">
            <a href="/" className="navbar__link">
                Accueil
            </a>
          </li>
          <li className="navbar__item">
            <a href="/" className="navbar__link">Portfolio</a>
          </li>
          <li className="navbar__item">
            <a href="" className="navbar__link">Services</a>
          </li>
          <li className="navbar__item">
            <a href="" className="navbar__link"></a>
          </li>
          <li className="navbar__item">
            <a href="" className="navbar__link"></a>
          </li>
          <li className="navbar__item">
            <a href="" className="navbar__link"></a>
          </li>
        </ul>
        <button className="navbar__burger">
            <span className="burger-bar"></span>
        </button>
      </nav>
    );
}