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
      <div className="most-used">
        <img
          className="w-full h-auto"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=codeyg12&theme=transparent&hide_border=true&title_color=F1F1EF&text_color=F1F1EF&icon_color=F1F1EF&text_bold=false&layout=donut"
          alt="Github Stats"
          loading="lazy"
        />
        {/* <img
          className="w-full h-auto"
          src="https://skillicons.dev/icons?i=html,css,js,jquery,bootstrap,nodejs,express,mysql,mongodb,react,arduino,babel,django,graphql,py,tailwind&perline=5"
          alt="Skills"
          loading="lazy"
        /> */}
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
