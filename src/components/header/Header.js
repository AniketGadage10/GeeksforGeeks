import React from "react";
import "./header.css";
import CTA from "./CTA";
import IMG from "../../assets/me-7.webp";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello Connections ,I'm</h5>
        <h1>Aniket Govind Gadage</h1>
        <h5 className="text-light">Full-Stack-Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="img">
          <img src={IMG} alt="Profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;
