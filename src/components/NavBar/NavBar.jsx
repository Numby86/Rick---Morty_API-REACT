import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import './NavBar.scss';
=======
import "./NavBar.scss";
import Search from "../Search/Search";
import imagelogo from "../../images/logo.png";
>>>>>>> 70fae9a1a879ca383d73bb5155f4b5bfa2cf13f0

const NavBar = () => {
  return (
    <div>
      <ul>
        <li className="logo">
          <Link className="links" to={"/home"}>
            <img src={imagelogo} alt="logo" />
          </Link>
        </li>
        <li>
          <Link className="links" to={"/login"}>
            <h2>TU USUARIO</h2>
          </Link>
        </li>
        <li>
          <Link className="links" to={"/list"}>
            <h2>LISTADO</h2>
          </Link>
        </li>
        <li>
<<<<<<< HEAD
          <Link className="links" to={"/search"}>
            <h2>
              BUSCADOR
            </h2>
=======
          <Link className="links" to={"/miniCard"}>
            <h2>CARDS</h2>
>>>>>>> 70fae9a1a879ca383d73bb5155f4b5bfa2cf13f0
          </Link>
        </li>
        <li>
          <Search />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
