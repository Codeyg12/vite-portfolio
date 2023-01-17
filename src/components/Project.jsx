import {
  ORM,
  Jate,
  TechTalk,
  Scribe,
  OnTask,
  Employee,
  Hangman,
  Book,
} from "./assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function Project() {
  return (
    <div className="project-set">
      <div className="image-container">
        <img src={ORM} alt="ORM" />
        <div className="overlay">
          <div className="text">
            ORM E-Commerce
            <br />
            MySQL, Express, Insomnia
          </div>
          <a
            href="https://github.com/Codeyg12/ORM-E-commerce"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://drive.google.com/file/d/1tDfVWBk5Ad54AIqF8rVydW3fVekvWF3I/view"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLink} />
          </a>
        </div>
      </div>
      <div className="image-container">
        <img src={Jate} alt="Jate" />
        <div className="overlay">
          <div className="text">
            Jate <br />
            JavaScript, Express
          </div>
          <a
            href="https://github.com/Codeyg12/expressNotes"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faLink} />
          </a>
        </div>
      </div>
      <div className="image-container">
        <img src={TechTalk} alt="TechTalk" />
        <div className="overlay">
          <div className="text">
            TechTalk
            <br />
            Sequelize, MySQL, Express
          </div>
          <a
            href="https://github.com/Codeyg12/MVC-tech-blog"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faLink} />
          </a>
        </div>
      </div>
      <div className="image-container">
        <img src={Scribe} alt="Scribe" />
        <div className="overlay">
          <div className="text">
            Scribe
            <br />
            jQuery, Bulma, API
          </div>
          <a
            href="https://github.com/pppreap/project1"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://pppreap.github.io/project1/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLink} />
          </a>
        </div>
      </div>
      <div className="image-container">
        <img src={OnTask} alt="OnTask" />
        <div className="overlay">
          <div className="text">
            OnTask
            <br />
            MognoDB, React, Express
          </div>
          <a
            href="https://github.com/Codeyg12/onTask"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faLink} />
          </a>
        </div>
      </div>
      <div className="image-container">
        <img src={Employee} alt="Employee Tracker" />
        <div className="overlay">
          <div className="text">
            Employee Tracker
            <br />
            JavaScript, MySQL, Node
          </div>
          <a
            href="https://github.com/Codeyg12/MySQL-employee-tracker"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://drive.google.com/file/d/146Tm47Vuk9i1XhDXDfVfXm2nUeoxAy_4/view"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLink} />
          </a>
        </div>
      </div>
      <div className="image-container">
        <img src={Hangman} alt="Hangman" />
        <div className="overlay">
          <div className="text">
            Hangman
            <br />
            Vite, React
          </div>
          <a
            href="https://github.com/Codeyg12/hangmanReact"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://codeyg12.github.io/hangmanReact/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLink} />
          </a>
        </div>
      </div>
      <div className="image-container">
        <img src={Book} alt="Book Search" />
        <div className="overlay">
          <div className="text">
            Book Search
            <br />
            MongoDB, React, ApolloGraphQL
          </div>
          <a
            href="https://github.com/Codeyg12/MERN-book-search-engine"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faLink} />
          </a>
        </div>
      </div>
    </div>
  );
}
