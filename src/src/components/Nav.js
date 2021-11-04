import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
export default function Nav() {
  return (
    <section className="nav-container flex-container tb">
      <article className="banner flex-container">
        <img src={logo} alt="DWTK" className="logo" />
        <div className="navsub1-container flex-container">
          <div className="website-name">DotaWatafak</div>
          <div className="slogan">Subscribe Or Feed</div>
        </div>
      </article>
      <article className="nav-items-container flex-container">
        <ul className="nav-items flex-container ">
          <li className="nav-item flex-center">
            <Link to="/submit" >Submit Your Clip</Link>
          </li>
          <li className="nav-item flex-center">
            <Link to="/latest">Latest Videos</Link>
          </li>
          <li className="nav-item flex-center">
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </article>
    </section>
  );
}
