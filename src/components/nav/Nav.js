import React, { useState } from "react";
import { BiSolidHomeHeart } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
import { GiBookCover } from "react-icons/gi";
import { BiSolidFolderOpen } from "react-icons/bi";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import "./nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => setActiveNav("#")}
      >
        <BiSolidHomeHeart />
      </a>

      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => setActiveNav("#about")}
      >
        <FaUserGraduate />
      </a>

      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => setActiveNav("#experience")}
      >
        <GiBookCover />
      </a>

      <a
        href="#portfolio"
        className={activeNav === "#portfolio" ? "active" : ""}
        onClick={() => setActiveNav("#portfolio")}
      >
        <BiSolidFolderOpen />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => setActiveNav("#contact")}
      >
        <BiSolidMessageRoundedDetail />
      </a>
    </nav>
  );
};

export default Nav;
