import React from "react";
import sendSVG from "../../assets/send.svg";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Eduardo Takeshi Watanabe</h1>
      <h3 className="home__subtitle">Backend Software Engineer</h3>
      <p className="home__description">
        I'm a problem solver who enjoys working with server-side technologies to
        create seamless user experiences.
      </p>

      <a href="#contact" className="button button--flex">
        Say Hello
        <img src={sendSVG} alt="" className="send__icon"></img>
      </a>
    </div>
  );
};

export default Data;
