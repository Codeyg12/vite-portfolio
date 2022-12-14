import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faUser,
  faEnvelopeOpenText,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <div className="nav-bar">
      <nav className="nav-bar">
        <NavLink exact="true" activeclassname="active" to="/" className='about-link'>
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/skills" className="skill-link">
          <FontAwesomeIcon icon={faCode} />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/projects" className="project-link">
          <FontAwesomeIcon icon={faFolderOpen} />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/contact" className="contact-link">
          <FontAwesomeIcon icon={faEnvelopeOpenText} />
        </NavLink>
      </nav>
    </div>
  );
}
