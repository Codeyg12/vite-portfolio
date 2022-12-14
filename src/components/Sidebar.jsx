import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="name">Codey Gallup</h1>
      <ul className="sidebar-list">
        <a href="https://github.com/Codeyg12" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faGithubSquare} className="ga-icon" />
        </a>
        <a
          href="https://linkedin.com/in/codey-gallup"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} className="li-icon" />
        </a>
      </ul>
    </div>
  );
}
