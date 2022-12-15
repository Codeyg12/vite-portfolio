import ProfilePicture from "../assets/me.jpg";

export default function About() {
  return (
    <>
      <h1 className="about-head">About Me</h1>
      <img src={ProfilePicture} alt="me" className="about-pic"></img>
      <div>
        <p className="about-p">
          For the past few years I've been in the solar industry and the tree
          industry. Earlier this year I started looking into coding and shortly
          after I earned a certificate in full-stack development.
          <br />
          <br />
          My experience as an electrical apprentice taught me good
          communication, great problem-solving skills, and how to work well in a
          team. I can handle all challenges head-on and due to my high work
          ethic, ensure that I complete the task successfully. My end goal is to
          work my way up the ladder in leadership and hopefully, inspire others.
        </p>
      </div>
    </>
  );
}
