import React from "react";
import MyCV from "../../assets/Aniketgadage_7741029614.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href={MyCV}
        download="Aniket-Gadage-full-stack-developer"
        className="btn btn__link"
      >
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary btn__link">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
