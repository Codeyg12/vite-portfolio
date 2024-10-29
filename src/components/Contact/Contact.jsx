import { useRef, useState } from "react";
import { validateEmail } from "../utils/helper";
import emailjs from "@emailjs/browser";
import "./contact.css";
import UpdatedResume from "../assets/updatedResume.pdf";

export default function Contact() {
  const form = useRef();
  // Starts the contact form blank
  const [contactFormState, setContactFormState] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { email, subject, message } = contactFormState;

  function handleContact(e) {
    // Checks if all fields have been entered and validating email
    if (e.target.name === "email") {
      const validEmail = validateEmail(e.target.value);
      if (!validEmail) {
        setErrorMessage("Please enter a valid email!");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setContactFormState({
        ...contactFormState,
        [e.target.name]: e.target.value,
      });
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r9ozccg",
        "template_i728ryi",
        e.target,
        "cRjguA3pkusSgJPh5"
      )
      .then(
        (result) => {
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container grid grid-cols-5 text-center h-4/5 gap-x-28 text-xl">
      <div className="contact-resume flex flex-col justify-evenly ml-2 pl-20 col-span-2">
        <div className="contact-header">
          <h1 className="contact-head">Contact Me</h1>
          <p>
            I'm actively looking for a career in web development and would love
            to hear from you! You are always welcome to email me directly at the
            email below, clicking it will save it to your clipboard, or you can
            use the form to the left to send an email directly from here. My
            GitHub and Linkedin are both linked at the top right of the screen.
          </p>
          <span>Email:</span>
          <abbr
            className="email-copy cursor-copy"
            onClick={() =>
              navigator.clipboard.writeText("codey.gallup@gmail.com")
            }
            title="Click to save to clipboard"
          >
            codey.gallup@gmail.com
          </abbr>
          <address>Colorado Springs, CO 80903</address>
        </div>

        <div className="resume-section">
          <h1>Resume</h1>
          <p>
            Below is a link directly to my Indeed resume or you can click below
            that to download the resume directly
          </p>
          <a
            href="https://my.indeed.com/p/codeyg-jl644zf"
            target="_blank"
            rel="noreferrer"
          >
            Click here to see resume on Indeed
          </a>
          <br />
          <a href={UpdatedResume} download="Codeys Resume">
            Click here to download a copy
          </a>
        </div>
      </div>

      <form className="contact-form space-y-8 col-span-3 place-content-center mx-20" ref={form} onSubmit={sendEmail}>
        <div>
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            className="input-form block w-full"
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleContact}
            placeholder="example@email.com"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block">
            Subject
          </label>
          <input
            className="input-form block w-full"
            type="text"
            name="subject"
            defaultValue={subject}
            onBlur={handleContact}
            placeholder="What would you like to discuss?"
          />
        </div>
        <div className="">
          <label htmlFor="message" className="block">
            Your message
          </label>
          <textarea
            className="input-form block w-full"
            // className="contact-text w-full h-60"
            name="message"
            rows={10}
            defaultValue={message}
            onBlur={handleContact}
            placeholder="Enter message here..."
          />
        </div>
        {errorMessage && <p className="contact-err">{errorMessage}</p>}
          <button type="submit" className="">Send Message</button>
      </form>
    </div>
  );
}
