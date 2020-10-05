import React from "react";
import "./nav.css";
import logo from "./logo.png"
import {Link} from "react-router-dom"
export default () => {
  return (
    <div className="header">
    <img className="logo" src={logo}/>
      <input type="checkbox" id="chk" />
      <label htmlFor="chk" className="show-menu-btn">
        <i className="fas fa-bars" />
      </label>

      <ul className="menu">
      <Link to="aboutUS">About</Link>
       
        <a href="/">Services</a>
        <a href="/">Appointment</a>
        <a href="/">Patient</a>
        <a href="/">Resources</a>
        <a href="/">Blog</a>
        <a href="/">Contact</a>
        <label htmlFor="chk" className="hide-menu-btn">
          <i className="fas fa-times" />
        </label>
      </ul>
    </div>
  );
};
