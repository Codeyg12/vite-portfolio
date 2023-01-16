import ProfilePicture from "./assets/me.jpg";

export default function About() {
  return (
    <>
      <h1 className="about-head">About Me</h1>
      <div className="about-grid">
        <img src={ProfilePicture} alt="me" className="about-pic"></img>
        <p className="about-p">
        Hello! My name is Codey, and I am an aspiring web developer with a
          background as an apprentice electrician. I have always had a passion
          for technology and its ability to solve complex problems, and I have
          found that web development is the perfect way for me to use my skills
          and experience to make a positive impact.
          </p>
          <p className="about-p">
          As an apprentice electrician, I have gained hands-on experience
          working with complex systems, and I have a strong understanding of the
          technical concepts and processes that are necessary for success in the
          industry. I am excited to bring this experience to my work as a web
          developer, and I am confident that I can help businesses and
          organizations achieve their goals through cutting-edge web solutions.
        </p>
      </div>
    </>
  );
}

