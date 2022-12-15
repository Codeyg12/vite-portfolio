import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { faFreeCodeCamp, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Sololearn from "../assets/solo.png";

export default function Skill() {
  return (
    <div className="skill-grid">
      <div>
        <h1>Resume</h1>
      </div>
      <div>
        <h1>Skills</h1>
      </div>
      <div className="certificates">
        <h1>Certificates</h1>
        <ul className="certs-list">
          <a
            href="https://www.freecodecamp.org/Codeyg"
            rel="noreferrer"
            target="_blank"
            className="fcc-link"
          >
            <FontAwesomeIcon icon={faFreeCodeCamp} />
          </a>

          <a className="grasshopper-link">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
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
