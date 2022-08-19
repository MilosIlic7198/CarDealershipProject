import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = (props) => (
  <header>
    <nav>
      <ul>
        <NavLink to="/">Cars</NavLink>
        <NavLink to="/cart">Cars ({props.cartItemNumber})</NavLink>
      </ul>
    </nav>
  </header>
);

export default Navigation;
