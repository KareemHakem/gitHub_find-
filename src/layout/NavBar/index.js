import React from "react";
import "./style.css";
import Image from "../../images/gitlogo-modified.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="left_side">
        <img className="logo" src={Image} alt="logo" />
        <text className="text"> GitHub </text>
      </div>

      <div className="right_side">
        <ul className="ul">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
