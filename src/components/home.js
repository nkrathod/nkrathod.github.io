import React from "react";
// import { Helmet } from "react-helmet";
// import { Navbar } from "./navbar";
import { LandingPage } from "./landingPage";
import { About } from "./about";
import { Services } from "./services";
import { Project } from "./project";
import { Contact } from "./contact";

function HomeComponent() {
  return (
    <div>
      {/* header */}
      <div id="header">
        <div className="container">
          {/* <Navbar /> */}
          <LandingPage />
        </div>
      </div>
      <i className="fa-solid fa-circle-up" onClick={() => window.location.href = '#'}></i>
      <i className="fa-regular fa-circle-up" onClick={() => window.location.href = '#'}></i>
      {/* about */}
      <About />
      {/* services */}
      <Services />
      {/* project */}
      <Project />
      {/* contact */}
      <Contact />
    </div>
  );
}

export const Home = React.memo(HomeComponent);
