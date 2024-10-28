import { useRef, useState } from "react";
import { validateEmail } from "../utils/helper";
import emailjs from "@emailjs/browser";
import "./contact.css";
import UpdatedResume from "../assets/updatedResume.pdf";

export default function Contact() {
  const form = useRef();
  // Starts the contact form blank
  const [contactFormState, setContactFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = contactFormState;

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
    <div className="contact-container">
      <div className="contact-resume">
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
            className="email-copy"
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

      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <input
          className="input-form"
          type="text"
          name="name"
          defaultValue={name}
          onBlur={handleContact}
          placeholder="Name"
        />

        <input
          className="input-form"
          type="email"
          name="email"
          defaultValue={email}
          onBlur={handleContact}
          placeholder="Email"
        />
        <div className="long-grid">
          <textarea
            className="contact-text"
            name="message"
            defaultValue={message}
            onBlur={handleContact}
            placeholder="Enter message here..."
          />
        </div>
        {errorMessage && (
          <div className="long-grid">
            <p className="contact-err">{errorMessage}</p>
          </div>
        )}
        <div className="long-grid">
          <input className="contact-btn" type="submit" value="Send Message" />
        </div>
      </form>
    </div>
  );
}
