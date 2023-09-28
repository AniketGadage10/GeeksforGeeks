import React, { useRef } from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_myndznl",
      "template_sb4ij87",
      form.current,
      "gWpxSvfw_M3s9F5bW"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <div className="contact__title">
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>
      </div>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail />
            <a href="mailto:aniketgadage1018@gmail.com" target="_blank">
              aniketgadage1018@gmail.com
            </a>
          </article>

          {/* <article className="contact__option">
            <BsWhatsapp />
            <a
              href="https://api.whatsapp.com/send?phone=9897897323"
              target="_blank"
            >
              91-9876543210
            </a>
          </article> */}

          <article className="contact__option">
            <BsLinkedin />
            <a
              href="https://github.com/AniketGadage10/"
              target="_blank"
            >
              Connect
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full Name" required />

          <input type="email" name="email" placeholder="Your Email" required />

          <textarea
            name="message"
            rows="7"
            placeholder="Message"
            required
          ></textarea>

          <button type="submit" className="btn btn-primary btn__link">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
