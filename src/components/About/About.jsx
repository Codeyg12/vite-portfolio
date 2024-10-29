import ProfilePicture from "../assets/me.jpg";

export default function About() {
  return (
    <main className="ml-20">
      <h1 className="text-center text-5xl lg:mb-6">About Me</h1>
      <div className="flex flex-col items-center space-x-4 md:flex-row mt-10">
        <img src={ProfilePicture} alt="me" className="about-pic rounded-[25%] lg:my-auto mx-24 w-96 blur-lg"></img>
        <div className="flex-1 mx-24">
          <p className="text-lg m-10 sm:w-[80%] lg:text-2xl lg:m-24">
            Hello! My name is Codey, and I am an aspiring web developer with a
            background as an apprentice electrician. I have always had a passion
            for technology and its ability to solve complex problems, and I have
            found that web development is the perfect way for me to use my
            skills and experience to make a positive impact.
          </p>
          <p className="text-lg m-10 sm:w-[80%] lg:text-2xl lg:m-24">
            As an apprentice electrician, I have gained hands-on experience
            working with complex systems, and I have a strong understanding of
            the technical concepts and processes that are necessary for success
            in the industry. I am excited to bring this experience to my work as
            a web developer, and I am confident that I can help businesses and
            organizations achieve their goals through cutting-edge web
            solutions.
          </p>
        </div>
      </div>
    </main>
  );
}
