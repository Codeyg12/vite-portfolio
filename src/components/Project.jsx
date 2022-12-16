import ORM from "./assets/orm.png";
import Jate from "./assets/jate.png";
import TechTalk from "./assets/techtalk.png";
import Scribe from "./assets/scribe.png";
import OnTask from "./assets/ontask.png";
import Employee from "./assets/mysqletrack.png";
import Hangman from "./assets/starhang.png";
import Book from "./assets/booksearch.png";

export default function Project() {
  return (
    <div className="project-set">
      <div>
        <a
          href="https://github.com/Codeyg12/ORM-E-commerce"
          rel="noreferrer"
          target="_blank"
          className="orm-proj"
        >
          <img src={ORM} />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/Codeyg12/expressNotes"
          rel="noreferrer"
          target="_blank"
          className="note-proj"
        >
          <img src={Jate} />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/Codeyg12/MVC-tech-blog"
          rel="noreferrer"
          target="_blank"
          className="tech-proj"
        >
          <img src={TechTalk} />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/pppreap/project1"
          rel="noreferrer"
          target="_blank"
          className="scribe-proj"
        >
          <img src={Scribe} />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/Codeyg12/onTask"
          rel="noreferrer"
          target="_blank"
          className="task-proj"
        >
          <img src={OnTask} />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/Codeyg12/MySQL-employee-tracker"
          rel="noreferrer"
          target="_blank"
          className="e-proj"
        >
          <img src={Employee} />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/Codeyg12/hangmanReact"
          rel="noreferrer"
          target="_blank"
          className="hang-proj"
        >
          <img src={Hangman} />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/Codeyg12/MERN-book-search-engine"
          rel="noreferrer"
          target="_blank"
          className="book-proj"
        >
          <img src={Book} />
        </a>
      </div>
    </div>
  );
}
