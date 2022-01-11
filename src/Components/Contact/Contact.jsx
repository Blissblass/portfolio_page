import "../../Assets/Stylesheets/contact.css";
import { AiFillLinkedin } from "react-icons/ai";
import { GrMail } from "react-icons/gr";

const Contact = () => {
  const handleMail = () =>
    window.location.assign("mailto:erayalkis@hotmail.com");
  const handleCopy = () => {
    const button = document.querySelector(".copy-button");
    const email = document.querySelector(".contact-button-email").textContent;
    navigator.clipboard.writeText(email);
    button.classList.add("copied");
    setTimeout(() => {
      button.classList.remove("copied");
    }, 1000);
  };

  return (
    <div className="contact-container">
      <div className="contact">
        <h1>Get In Touch</h1>
        <a
          href="https://www.linkedin.com/in/eray-alkis-83ab9519b/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="contact-button-linkedin">
            Linkedin <AiFillLinkedin className="linkedin-ico" />
          </div>
        </a>
        <div className="contact-button-email">
          erayalkis@hotmail.com{" "}
          <GrMail className="mail-ico" onClick={handleMail} />
        </div>
        <button className="copy-button" onClick={handleCopy}>
          <p className="copy-button-text">Copy to Clipboard</p>
          <p className="copy-button-text-confirm">Copied to clipboard!</p>
        </button>
      </div>
    </div>
  );
};

export default Contact;
