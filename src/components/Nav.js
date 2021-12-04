import { Component } from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <header>
      <nav>
        <div className="hamburger">
          <div className="line"> </div>
          <div className="line"> </div>
          <div className="line"> </div>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
