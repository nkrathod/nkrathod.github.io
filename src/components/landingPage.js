import React from "react";
import { Helmet } from "react-helmet";
import ResumePDF from "../assets/Nitesh_Software_Engineer.pdf";

function LandingPageComponent() {
  return (
    <div className="header-text">
      <Helmet>
        <title>Nitesh Rathod | Software Developer</title>
        <meta
          name="description"
          content="Portfolio of Nitesh Rathod, a web developer specializing in React, Redux, Node.js, and AWS."
        />
        <meta
          name="keywords"
          content="Nitesh Rathod, Software Developer, Software Engineer, Web Developer, React, Portfolio, JavaScript"
        />
        <meta name="author" content="Nitesh Rathod" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <p>
        ME<span className="bounce-rotate">R</span>N Stack Developer
      </p>
      <h1>
        Hi, I'm <span>Nitesh</span>
        <br />
        Rathod From Pune, <span>India</span>
      </h1>
      <a
        href={ResumePDF}
        rel="noreferrer"
        target="_blank"
        download
        className="more-btn btn2"
      >
        Download CV <i className="fa-solid fa-cloud-arrow-down"></i>
      </a>
    </div>
  );
}

export const LandingPage = React.memo(LandingPageComponent);
