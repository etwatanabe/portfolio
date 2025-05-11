import React from "react";
import "./about.css";
import Resume from "../../assets/RESUME_Eduardo_Watanabe.pdf";
import filesSVG from "../../assets/files.svg";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <div className="about__img"></div>

        <div className="about__data">
          <Info />

          <p className="about__description">
            Backend developer focused on creating scalable and high-performance
            systems. With experience in technologies such as Node.js, .NET, and
            Python, I have implemented solutions that meet the needs of various
            businesses. I value clean, testable, and maintainable code. My goal
            is to develop systems that not only work well today but can also
            evolve with future demands.
          </p>

          <a download="" href={Resume} className="button button--flex">
            Download Resume
            <img src={filesSVG} alt="" className="files__icon"></img>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
