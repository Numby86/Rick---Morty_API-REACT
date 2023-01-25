import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import imagelogo from "../../images/logo.png";

const NavBar = () => {
  return (
    <div className="diNavBar">
    <Link className="links" to={"/home"}>
            <img className="imageLogo" src={imagelogo} alt="logo" />
          </Link>
      <ul className="ulNavBar">
        <li className="liNavBar">
          <Link className="links" to={"/login"}>
            <h2 className="h2NavBar">TU USUARIO</h2>
          </Link>
        </li>
        <li className="liNavBar">
          <Link className="links" to={"/list"}>
            <h2 className="h2NavBar">LISTADO</h2>
          </Link>
        </li>
        <li className="liNavBar">
          <Link className="links" to={"/miniCard"}>
            <h2 className="h2NavBar">CARDS</h2>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;