import '../../Assets/Stylesheets/contact.css';
import { AiFillLinkedin} from 'react-icons/ai';
import { GrMail } from 'react-icons/gr';

const Contact = () => {

  const handleMail = () => window.location.assign("mailto:erayalkis@hotmail.com");
  const handleCopy = () => {
    const email = document.querySelector(".contact-button-email").textContent;
    navigator.clipboard.writeText(email);
  };

  return(
    <div className="contact-container">
      <div className="contact">
        <h1>Get In Touch</h1>
        <div className="contact-button-linkedin">Linkedin <AiFillLinkedin className="linkedin-ico" /></div>
        <div className="contact-button-email">erayalkis@hotmail.com <GrMail className="mail-ico" onClick={handleMail} /></div>
        <button className="copy-button" onClick={handleCopy}>Copy to Clipboard</button>
      </div>
    </div>
  )
};

export default Contact;