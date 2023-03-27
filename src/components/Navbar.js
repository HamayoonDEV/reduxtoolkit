import React from "react";
import "./Navbar.css";
import { Avatar } from "@mui/material";
import hamayoon from "../images/hamayoon.jpg";
import { useSelector } from "react-redux";

const Navbar = () => {
  const name = useSelector((state) => state.name);
  return (
    <div className="navbar">
      <div className="navname">
        <h1>Redux app</h1>
      </div>
      <div className="navbarmenu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contect</li>
        </ul>
      </div>
      <div className="navbarsearch">
        <input type="text" placeholder="search something" />
      </div>
      <div className="navprofile">
        <Avatar src={hamayoon} className="profilepic" />
        <span>{name}</span>
      </div>
    </div>
  );
};

export default Navbar;
