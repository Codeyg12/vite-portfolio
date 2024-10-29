import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsSpin, faCertificate } from "@fortawesome/free-solid-svg-icons";
import { faFreeCodeCamp, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Sololearn from "../assets/solo.png";
import { Link } from "react-router-dom";
import UpdatedResume from "../assets/updatedResume.pdf";
import { techList } from "./technology-list";
import "./skills.css";

export default function Skill() {
  return (
    <div className="skill-grid grid grid-cols-3 mx-14 text-center gap-20 lg:text-2xl min-[1800px]:grid-cols-5">
      <div className="flex min-[1800px]:col-span-2">
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
      <div className="skills flex flex-col mb-10 bg-cyan-600 rounded-lg py-2">
        <h1 className="mb-10">Known Technologies</h1>
        <div className="grid grid-cols-2 gap-8 place-content-center h-full m-4 min-[1800px]:mx-0 min-[1800px]:place-items-center">

        {techList.map(tech => {
          return (
            <div className="hover:scale-125 w-52 text-center flex justify-center">
              <img src={tech.url} alt={tech.title} className="shadow-lg" />
              </div>
          )
        })}
        </div>
        {/* <p>HTML</p>
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
        <p>Handlebars</p> */}
      </div>
      <div className="certificates min-[1800px]:col-span-2">
        <h1>Certificates</h1>
        <p>
          Below are a few links to some apps and sites where I've earned some
          certificates. Click on any of the links to take a look!
        </p>
        <ul className="certs-list text-9xl grid grid-cols-2 gap-20 mt-16">
          <a
            href="https://www.freecodecamp.org/Codeyg"
            rel="noreferrer"
            target="_blank"
            className="fcc-link relative "
          >
            <FontAwesomeIcon icon={faFreeCodeCamp} />
          </a>

          <Link to={`/grasshopper`} className="grasshopper-link relative ">
            <FontAwesomeIcon icon={faGoogle} />
          </Link>
          <a
            href="https://www.sololearn.com/profile/25101425"
            rel="noreferrer"
            target="_blank"
            className="sololearn-link relative "
          >
            <FontAwesomeIcon icon={faArrowsSpin} />
            {/* <img className="sololearn-icon" src={Sololearn} alt="sololearn" /> */}
          </a>
          <a
            href="https://www.credly.com/users/codey-gallup"
            rel="noreferrer"
            target="_blank"
            className="credly-link relative "
          >
            <FontAwesomeIcon icon={faCertificate} />
          </a>
        </ul>
      </div>
    </div>
  );
}
