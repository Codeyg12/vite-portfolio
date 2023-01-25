import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { faFreeCodeCamp, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Sololearn from "../assets/solo.png";
import { Link } from "react-router-dom";
import UpdatedResume from "../assets/updatedResume.pdf";
import "./skills.css";

export default function Skill() {
  return (
    <div className="skill-grid">
      <div className="resume-section">
        <h1>Resume</h1>
        <p>User-focused MERN developer with a knack for fixing bugs</p>
        <br />
        <p>
          Below is a link directly to my Indeed resume or you can click below
          that to download the resume directly
        </p>
        <br />
        <a
          href="https://my.indeed.com/p/codeyg-jl644zf"
          target="_blank"
          rel="noreferrer"
        >
          Click here to see resume on Indeed
        </a>
        <br />
        <a href={UpdatedResume} download="Codeys Resume">
          Click here to download a copy
        </a>
      </div>
      <div className="skills">
        <h1>Known Technologies</h1>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>jQuery</p>
        <p>Bootstrap</p>
        <p>Bulma</p>
        <p>Node.js</p>
        <p>Express</p>
        <p>MySQL</p>
        <p>MongoDB</p>
        <p>JSON</p>
        <p>Git</p>
        <p>APIs</p>
        <p>REST</p>
        <p>React</p>
        <p>Agile</p>
        <p>Apollo GraphQL</p>
        <p>Handlebars</p>
      </div>
      {/* <div className="skills">
        <h1>Skills</h1>
        <ul className="tech-grid">
          <li>
            <label>HTML</label>
            <div className="progress">
              <div className="inner-prog" style={{ width: "85%" }}>
                85%
              </div>
            </div>
          </li>
          <li>
            <label>CSS</label>
            <div className="progress">
              <div className="inner-prog" style={{ width: "75%" }}>
                75%
              </div>
            </div>
          </li>
          <li>
            <label>JavaScript</label>
            <div className="progress">
              <div className="inner-prog" style={{ width: "75%" }}>
                75%
              </div>
            </div>
          </li>
          <li>
            <label>jQuery</label>
            <div className="progress">
              <div className="inner-prog" style={{ width: "60%" }}>
                60%
              </div>
            </div>
          </li>
          <li>
            <label>MySql</label>
            <div className="progress">
              <div className="inner-prog" style={{ width: "65%" }}>
                65%
              </div>
            </div>
          </li>
          <li>
            <label>MongoDB</label>
            <div className="progress">
              <div className="inner-prog" style={{ width: "65%" }}>
                65%
              </div>
            </div>
          </li>
          <li>
            <label>Express</label>
            <div className="progress">
              <div className="inner-prog" style={{ width: "70%" }}>
                70%
              </div>
            </div>
          </li>
          <li>
            <label>React</label>
            <div className="progress">
              <div className="inner-prog" style={{ width: "60%" }}>
                60%
              </div>
            </div>
          </li>
          <li>
            <label>Node</label>
            <div className="progress">
              <div className="inner-prog" style={{ width: "65%" }}>
                65%
              </div>
            </div>
          </li>
          <li>
            <label>Bulma</label>
            <div className="progress">
              <div className="inner-prog" style={{ width: "70%" }}>
                70%
              </div>
            </div>
          </li>
          <li>
            <label>Git</label>
            <div className="progress">
              <div className="inner-prog" style={{ width: "60%" }}>
                60%
              </div>
            </div>
          </li>
          <li>
            <label className="apollo">Apollo GraphQl</label>
            <div className="progress">
              <div className="inner-prog" style={{ width: "55%" }}>
                55%
              </div>
            </div>
          </li>
        </ul>
      </div> */}
      <div className="certificates">
        <h1>Certificates</h1>
        <p>
          Below are a few links to some apps and sites where I've earned some
          certificates. Click on any of the links to take a look!
        </p>
        <ul className="certs-list">
          <a
            href="https://www.freecodecamp.org/Codeyg"
            rel="noreferrer"
            target="_blank"
            className="fcc-link"
          >
            <FontAwesomeIcon icon={faFreeCodeCamp} />
          </a>

          <Link to={`/grasshopper`} className="grasshopper-link">
            <FontAwesomeIcon icon={faGoogle} />
          </Link>
          <a
            href="https://www.sololearn.com/profile/25101425"
            rel="noreferrer"
            target="_blank"
            className="sololearn-link"
          >
            <img className="sololearn-icon" src={Sololearn} alt="sololearn" />
          </a>
          <a
            href="https://www.credly.com/users/codey-gallup"
            rel="noreferrer"
            target="_blank"
            className="credly-link"
          >
            <FontAwesomeIcon icon={faCertificate} />
          </a>
        </ul>
      </div>
    </div>
  );
}
