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

export default function Project() {
  return (
    <div className="project-set">
      <div className="image-container">
        <img src={ORM} />
        <div className="overlay">
          <div className="text">MySQL, Express, Insomnia</div>
          <a
            href="https://github.com/Codeyg12/ORM-E-commerce"
            rel="noreferrer"
            target="_blank"
            className="orm-proj"
          ></a>
        </div>
      </div>
      <div className="image-container">
        <img src={Jate} alt="" />
        <div className="overlay">
          <div className="text"></div>
          <a
            href="https://github.com/Codeyg12/expressNotes"
            rel="noreferrer"
            target="_blank"
            className="note-proj"
          ></a>
        </div>
      </div>
      <div className="image-container">
        <img src={TechTalk} alt="" />
        <div className="overlay">
          <div className="text"></div>
          <a
            href="https://github.com/Codeyg12/MVC-tech-blog"
            rel="noreferrer"
            target="_blank"
            className="tech-proj"
          ></a>
        </div>
      </div>
      <div className="image-container">
        <img src={Scribe} alt="" />
        <div className="overlay">
          <div className="text"></div>
          <a
            href="https://github.com/pppreap/project1"
            rel="noreferrer"
            target="_blank"
            className="scribe-proj"
          ></a>
        </div>
      </div>
      <div className="image-container">
        <img src={OnTask} alt="" />
        <div className="overlay">
          <div className="text"></div>
          <a
            href="https://github.com/Codeyg12/onTask"
            rel="noreferrer"
            target="_blank"
            className="task-proj"
          ></a>
        </div>
      </div>
      <div className="image-container">
        <img src={Employee} alt="" />
        <div className="overlay">
          <div className="text"></div>
          <a
            href="https://github.com/Codeyg12/MySQL-employee-tracker"
            rel="noreferrer"
            target="_blank"
            className="e-proj"
          ></a>
        </div>
      </div>
      <div className="image-container">
        <img src={Hangman} alt="" />
        <div className="overlay">
          <div className="text"></div>
          <a
            href="https://github.com/Codeyg12/hangmanReact"
            rel="noreferrer"
            target="_blank"
            className="hang-proj"
          ></a>
        </div>
      </div>
      <div className="image-container">
        <img src={Book} alt="" />
        <div className="overlay">
          <div className="text"></div>
          <a
            href="https://github.com/Codeyg12/MERN-book-search-engine"
            rel="noreferrer"
            target="_blank"
            className="book-proj"
          ></a>
        </div>
      </div>
    </div>
  );
}
