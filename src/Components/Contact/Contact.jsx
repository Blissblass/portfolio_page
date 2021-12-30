import '../../Assets/Stylesheets/contact.css';
import { AiFillLinkedin} from 'react-icons/ai';
import { GrMail } from 'react-icons/gr';

const Contact = () => {

  const handleMail = () => window.location.assign("mailto:erayalkis@hotmail.com");

  return(
    <div className="contact-container">
      <div className="contact">
        <h1>Get In Touch</h1>
        <div className="contact-button-linkedin">Linkedin <AiFillLinkedin className="linkedin-ico" /></div>
        <div className="contact-button-email">erayalkis@hotmail.com <GrMail className="mail-ico" onClick={handleMail} /></div>
        <button className="copy-button">Copy to Clipboard</button>
      </div>
    </div>
  )
};

export default Contact;