import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faUser,
  faEnvelopeOpenText,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './navbar.css'

export default function Navbar() {
  return (
    <>
        <nav className="nav-bar fixed top-0 min-h-28 w-screen bg-cyan-600 text-4xl text-slate-200 sm:text-3xl">
          <NavLink
            exact="true"
            activeclassname="active"
            to="/"
            className="about-link absolute top-9 left-[25%]"
            >
            <FontAwesomeIcon icon={faUser} />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/skills"
            className="skill-link absolute top-9 left-[40%]"
            >
            <FontAwesomeIcon icon={faCode} />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/projects"
            className="project-link absolute top-9 left-[55%]"
            >
            <FontAwesomeIcon icon={faFolderOpen} />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/contact"
            className="contact-link absolute top-9 left-[70%]"
            >
            <FontAwesomeIcon icon={faEnvelopeOpenText} />
          </NavLink>
      <ul className="sidebar-list text-3xl md:text-2xl text-slate-200">
        <a
          href="https://github.com/Codeyg12"
          rel="noreferrer"
          target="_blank"
          className="ga-icon absolute top-2 right-12"
          >
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>
        <a
          href="https://linkedin.com/in/codey-gallup"
          rel="noreferrer"
          target="_blank"
          className="li-icon absolute top-[4rem] right-12"
          >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </ul>
            </nav>
    </>
  );
}
