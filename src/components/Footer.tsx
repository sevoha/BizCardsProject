import React, { FunctionComponent } from "react";
import { Link, NavLink } from "react-router-dom";
import About from "./About";

interface FooterProps {
  userInfo: any;
}

const Footer: FunctionComponent<FooterProps> = ({ userInfo }) => {
  return (
    <div className="footer">
      <div className="icon-container">
         {(userInfo.role === "business" || userInfo.role === "admin") && (
            <Link to="/MyCard" className="about-link mx-3 text-info">
          <i className="fa-solid fa-clipboard-user fa-xl"></i>
          <br />
         My Card
        </Link >
         )}
        <Link to="/about" className="about-link mx-3 text-info">
          <i className="fa-solid fa-book-open fa-xl"></i>
          <br />
          ABOUT
        </Link >
        {(userInfo.role === "business" || userInfo.role === "regular" || userInfo.role === "admin") && (
          <Link to="/Fav" className="about-link mx-3 text-info ">
            <i className="fa-solid fa-bookmark fa-xl"></i>
            <br />
            FAV
          </Link>
        )}
      </div>
    </div>
  );
};

export default Footer;

