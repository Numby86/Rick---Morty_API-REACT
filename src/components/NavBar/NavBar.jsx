import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link className="links" to={"/home"}>
            <h2>
              HOME
            </h2>
          </Link>
        </li>
        <li>
          <Link className="links" to={"/form"}>
            <h2>
              TU USUARIO
            </h2>
          </Link>
        </li>
        <li>
          <Link className="links" to={"/card"}>
            <h2>
              TODOS LOS PERSONAJES
            </h2>
          </Link>
        </li>
        <li>
          <Link className="links" to={"/search"}>
            <h2>
              BUSCADOR
            </h2>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar
