import React from "react";
import "./experience.css";
import { ImHtmlFive } from "react-icons/im";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript,SiMongodb,SiIntellijidea } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { BsGit } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import {SiSpringboot,SiMysql} from 'react-icons/si';
import {BiLogoJava} from "react-icons/bi"
import {TbBrandVscode} from "react-icons/tb"

const Experience = () => {
  return (
    <section id="experience">
      <div className="experience__title">
        <h5>My Skills in</h5>
        <h2>FRONT-END-Development</h2>
      </div>
      <div className="container experience__container">
        <div className="experience__frontend">
          <div className="experience__content">
            <article className="experience__details">
              <ImHtmlFive className="experience__details-icons" />
              <h4>HTML</h4>
            </article>

            <article className="experience__details">
              <FaCss3Alt className="experience__details-icons" />
              <h4>CSS</h4>
            </article>

            <article className="experience__details">
              <SiJavascript className="experience__details-icons" />
              <h4>JAVASCRIPT</h4>
            </article>

            <article className="experience__details">
              <RiReactjsLine className="experience__details-icons" />
              <h4>REACT JS</h4>
            </article>

            <article className="experience__details">
              <BsGit className="experience__details-icons" />
              <h4>GIT</h4>
            </article>

            <article className="experience__details">
              <BsGithub className="experience__details-icons" />
              <h4>GITHUB</h4>
            </article>
          </div>
        </div>
      </div>


      <div className="experience__title">
        <h5>My Skills in</h5>
        <h2>BACK-END-Development</h2>
      </div>
      <div className="container experience__container">
        <div className="experience__frontend">
          <div className="experience__content">
           
          <article className="experience__details">
              <BiLogoJava className="experience__details-icons" />
              <h4>JAVA</h4>
            </article>

            <article className="experience__details">
              <SiSpringboot className="experience__details-icons" />
              <h4>Spring Boot</h4>
            </article>

            <article className="experience__details">
              <SiMysql className="experience__details-icons" />
              <h4>Mysql</h4>
            </article>

            <article className="experience__details">
              <TbBrandVscode className="experience__details-icons" />
              <h4>Vscode</h4>
            </article>

            <article className="experience__details">
              <SiMongodb className="experience__details-icons" />
              <h4>Mongodb</h4>
            </article>

            <article className="experience__details">
              <SiIntellijidea className="experience__details-icons" />
              <h4>Intellijidea</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
