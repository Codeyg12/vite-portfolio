import {
  ORM,
  Jate,
  TechTalk,
  Scribe,
  OnTask,
  Employee,
  Hangman,
  Book,
  Weather
} from "../assets";
import projectData from "./projectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "./project.css";


export default function Project() {
  return (
    <div className="project-set w-full h-fit grid grid-cols-3 place-items-center gap-y-6  mx-auto">
      {projectData.map((project, idx) => (
            <div className="image-container w-80 h-52 relative min-[1800px]:w-96 min-[1800px]:h-72" key={idx}>
            <img src={project.src} alt={project.alt} className="w-full h-full" />
            <div className="overlay absolute inset-0 invisible opacity-0 flex justify-center items-center flex-wrap">
              <div className="text text-center text-xl mb-2">
                {project.title}
                <br />
                {project.tech}
              </div>
              <a
                href={project.githubHref}
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href={project.link}
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </div>
          </div>
      ))}
    </div>
  );
}
