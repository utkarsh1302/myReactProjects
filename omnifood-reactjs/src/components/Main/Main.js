import React, { Component } from "react";
import logo from "../../resources/images/logo-white.png";
import { Link } from "react-router-dom";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <header>
        <nav>
          <img src={logo} alt="OmniFoods logo" className="logo"></img>
          <ul className="main-nav">
            <li>
              <Link to="/fooddelivery">Food Delivery</Link>
            </li>
            <li>
              <Link to="/howitworks">How it works</Link>
            </li>
            <li>
              <Link to="/ourcities">Our Cities</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
        <div className="hero-text-box">
          <h1>
            Goodbye junk food.<br></br> Hello super healthy meals.
          </h1>
          <a className="btn btn-full" href="#">
             I’m hungry
          </a>
          <a className="btn btn-ghost" href="#">
             Show me more
          </a>
        </div>
      </header>
    );
  }
}

export default Main;
