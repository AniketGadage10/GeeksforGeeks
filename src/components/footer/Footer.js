import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        <u>ANIKET GOVIND GADAGE PORTFOLIO</u>
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/aniket-gadage-35430422b/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/AniketGadage10">
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy;Aniket Gadage's Portfolio. All Rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
