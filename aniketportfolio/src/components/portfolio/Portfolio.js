import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Portfolio-1.webp";
import IMG2 from "../../assets/portfolio-2.webp";
import IMG3 from "../../assets/portfolio-3.webp";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      alt: "Portfolio-1",
      title: "Passion Pursuit - The Landing Page",
      github: "https://github.com/AniketGadage10/Passion-Pursuit",
      // demo: " https://starbucks-clone-landing-page.netlify.app",
    },
    {
      id: 2,
      image: IMG2,
      alt: "Portfolio-2",
      title: "A Real Time Chat Application - TAWK",
      // github: "https://github.com",
      // demo: "https://github.com",
    },
    {
      id: 3,
      image: IMG3,
      alt: "Portfolio-3",
      title: "Infinity Shopping - E-Commerce Web App",
      // github: "https://github.com",
      // demo: "https://github.com",
    },
  ];

  return (
    <section id="portfolio">
      <div className="portfolio__title">
        <h5>Recent Works</h5>
        <h2>Projects</h2>
      </div>

      <div className="container portfolio__container">
        {data.map(({ id, image, alt, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-img">
                <img src={image} alt={alt} />
              </div>
              <h3>{title}</h3>

              {github && demo ? (
                <div className="portfolio__item-cta">
                  <a href={github} className="btn btn__link" target="_blank">
                    GitHub
                  </a>

                  <a
                    href={demo}
                    className="btn btn-primary btn__link"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </div>
              ) : (
                <a className="btn btn-primary btn__link btn__not">
                  <small>Academic Project-not deployed</small>
                </a>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
