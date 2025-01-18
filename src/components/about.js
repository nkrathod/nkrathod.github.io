import React, { useState } from "react";
import { Helmet } from "react-helmet";
import ProfilePic from "../assets/ProfilePic.JPG";

function AboutComponent() {
  const [content, setContent] = useState("skills");
  const startYear = 2019;

  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;

  let tabLinks = document.getElementsByClassName("tab-links");
  const openTab = (event, tabName) => {
    for (let tabLink of tabLinks) {
      tabLink.classList.remove("active-links");
    }
    event.currentTarget.classList.add("active-links");
    setContent(tabName);
  };

  return (
    <div id="about">
      <Helmet>
        <title>About Me | Nitesh Rathod - Web Developer and Freelancer</title>
        <meta
          name="description"
          content="Learn about Nitesh Rathod, a skilled web developer with expertise in React, Node.js, JavaScript, and AWS. Discover my professional journey and skills."
        />
        <meta
          name="keywords"
          content="Nitesh Rathod, About Nitesh Rathod, Web Developer, Freelancer, React, Node.js, JavaScript, AWS, Portfolio, Experience, Skills"
        />
        <meta name="author" content="Nitesh Rathod" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={ProfilePic} alt="Nitesh Rathod, Software Developer" />
            {/* <img src="assets/sitbg1.png" alt="Nitesh Rathod"> */}
            {/* <h1 className="sub-title">
              Technical <span>Skills</span>
            </h1>
            <p>React, Redux, JavaScript, TypeScript, Node.js,
            Express.js, MongoDB, Material-UI, Bootstrap, Git, and AWS.</p> */}
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">
              About <span>Me</span>
            </h1>
            <p>
              I am <span className="my-name">Nitesh Rathod</span>, a passionate
              web developer with over {yearsOfExperience}+ years of experience
              building robust and scalable applications. My expertise includes
              React, Redux, JavaScript, TypeScript, Node.js, Express.js,
              MongoDB, Material-UI, Bootstrap, Git, and AWS. I have successfully
              contributed to diverse domains such as Retail, E-commerce, EdTech,
              Social, and Insurance, delivering innovative solutions tailored to
              business needs.
            </p>
            <div className="tab-titles">
              <p
                className="tab-links active-links"
                onClick={(e) => openTab(e, "skills")}
              >
                Skills
              </p>
              <p
                className="tab-links"
                onClick={(e) => openTab(e, "experience")}
              >
                Experience
              </p>
              <p className="tab-links" onClick={(e) => openTab(e, "education")}>
                Education
              </p>
            </div>
            {content === "skills" && (
              <div className="tab-contents active-tab" id="skills">
                <ul>
                  <li>
                    <span>
                      <b>React</b>
                    </span>
                    <br />
                    Proficient in developing dynamic and responsive web
                    applications using React.js.
                  </li>
                  <li>
                    <span>
                      <b>Redux</b>
                    </span>
                    <br />
                    Experienced in managing and centralizing application state
                    using the Redux.
                  </li>
                  <li>
                    <span>
                      <b>JavaScript</b>
                    </span>
                    <br />
                    Skilled in developing web applications with a focus on clean
                    and efficient code.
                  </li>
                  <li>
                    <span>
                      <b>Node</b>
                    </span>
                    <br />
                    Expertise in building RESTful APIs using Node.js,
                    Express.js, and AWS API Gateway.
                  </li>
                  <li>
                    <span>
                      <b>AWS</b>
                    </span>
                    <br />
                    Developed scalable serverless applications leveraging
                    Node.js and AWS Lambda.
                  </li>
                </ul>
              </div>
            )}
            {content === "experience" && (
              <div className="tab-contents" id="experience">
                <ul>
                  <li>
                    <span>
                      <b>Accenture</b> ( Jan 2022 - Current )
                    </span>
                    <br />
                    Custom Software Engineering Senior Analyst
                  </li>
                  <li>
                    <span>
                      <b>Randstad Technologies</b> ( Jun 2022- Dec 22 )
                    </span>
                    <br />
                    Senior Software Developer
                  </li>
                  <li>
                    <span>
                      <b>K12 Techno Services Pvt. Ltd</b> ( Jan 2021- Jun 22 )
                    </span>
                    <br />
                    Senior Software Developer
                  </li>
                  <li>
                    <span>
                      <b>AdroitCoders</b> ( Jun 2020 - Jan 2021 )
                    </span>
                    <br />
                    Software Developer
                  </li>
                  <li>
                    <span>
                      <b>Nvidia</b> ( Dec 2017 - Jun 2019 )
                    </span>
                    <br />
                    Process Executive
                  </li>
                </ul>
              </div>
            )}
            {content === "education" && (
              <div className="tab-contents" id="education">
                <ul>
                  <li>
                    <span>
                      <b>VPKBIET</b>, Baramati
                    </span>
                    <br />
                    BE in Computer Engineering
                  </li>
                  <li>
                    <span>
                      <b>HSC</b>, Chhatrapati Sambhaji Nagar
                    </span>
                    <br />
                    Science
                  </li>
                  <li>
                    <span>
                      <b>SSC</b>, Chhatrapati Sambhaji Nagar
                    </span>
                    <br />
                    Marathi medium
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export const About = React.memo(AboutComponent);
