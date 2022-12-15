import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faUser,
  faEnvelopeOpenText,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  return (
    <>
      <div className="nav-bar">
        <nav className="nav-bar">
          <NavLink
            exact="true"
            activeclassname="active"
            to="/"
            className="about-link"
          >
            <FontAwesomeIcon icon={faUser} />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/skills"
            className="skill-link"
          >
            <FontAwesomeIcon icon={faCode} />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/projects"
            className="project-link"
          >
            <FontAwesomeIcon icon={faFolderOpen} />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/contact"
            className="contact-link"
          >
            <FontAwesomeIcon icon={faEnvelopeOpenText} />
          </NavLink>
        </nav>
      </div>
      <ul className="sidebar-list">
        <a
          href="https://github.com/Codeyg12"
          rel="noreferrer"
          target="_blank"
          className="ga-icon"
        >
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>
        <a
          href="https://linkedin.com/in/codey-gallup"
          rel="noreferrer"
          target="_blank"
          className="li-icon"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </ul>
    </>
  );
}
