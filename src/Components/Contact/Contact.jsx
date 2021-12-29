import '../../Assets/Stylesheets/contact.css';
import { AiFillLinkedin } from 'react-icons/ai';

const Contact = () => {

  return(
    <div className="contact-container">
      <div className="contact">
        <h1>Get In Touch</h1>
        <div className="contact-linkedin">Linkedin <AiFillLinkedin className="linkedin-ico" /></div>
        <div className="contact-email">erayalkis@hotmail.com</div>
        <button>Copy to Clipboard</button>
      </div>
    </div>
  )
};

export default Contact;