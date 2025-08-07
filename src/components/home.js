import React, { Suspense } from "react";
// import { Helmet } from "react-helmet";
// import { Navbar } from "./navbar";
import { LandingPage } from "./landingPage";
const  About = React.lazy(() => import("./about"));
const  Services = React.lazy(() => import("./services"));
const  Project = React.lazy(() => import("./project"));
const Contact = React.lazy(() => import("./contact"));

function HomeComponent() {
  return (
    <div>
      {/* home page */}
      <div id="header">
        <div className="container">
          {/* <Navbar /> */}
          <LandingPage />
        </div>
      </div>
      <i
        className="fa-solid fa-circle-up"
        onClick={() => (window.location.href = "#")}
      ></i>
      <i
        className="fa-regular fa-circle-up"
        onClick={() => (window.location.href = "#")}
      ></i>
      {/* about */}
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <About />
      </Suspense>
      {/* services */}
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Services />
      </Suspense>
      {/* project */}
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Project />
      </Suspense>
      {/* contact */}
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Contact />
      </Suspense>
    </div>
  );
}

export const Home = React.memo(HomeComponent);
