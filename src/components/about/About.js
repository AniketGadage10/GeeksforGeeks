import React from "react";
import "./about.css";
import IMG from "../../assets/about-me-1.gif";
import { FaAward, FaUserGraduate, FaFolderOpen } from "react-icons/fa6";

const About = () => {
  return (
    <section id="about">
      <div className="about__title">
        <h5>Get to Know</h5>
        <h2>About Me</h2>
      </div>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={IMG} alt="about-pic" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresh Knowledge</small>
            </article>

            <article className="about__card">
              <FaUserGraduate className="about__icon" />
              <h5>Education</h5>
              <small>Post-Graduate Diploma(PG-DAC)</small>
            </article>

            <article className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>

          <p>
            Ambitious Full-Stack-Developer, Fresh Graduate, Passionate about
            creating user-friendly web experiences and eager to collaborate with
            cross-functional teams.
          </p>

          <a href="#contact" className="btn btn-primary btn__link">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
