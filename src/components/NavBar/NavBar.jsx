import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import Search from "../Search/Search";
import imagelogo from "../../images/logo.png";

const NavBar = () => {
  return (
    <div>
      <Link className="links" to={"/home"}>
        <img src={imagelogo} alt="logo" />
      </Link>
      <ul>
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
          <Link className="links" to={"/miniCard"}>
            <h2>CARDS</h2>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
