import "../../Assets/Stylesheets/welcome.css";
import headshot from "../../Assets/Images/headshot.png";

const Welcome = () => {
  return (
    <div className="welcome-container" id="welcome">
      <div className="welcome">
        <img className="welcome-image" src={headshot} alt="My face :D" />
        <div className="welcome-text">
          <h1 className="text-1">Hi there!</h1>
          <h1 className="text-2">
            I'm <span className="welcome-span">Eray Alkış,</span>
          </h1>
          <h1 className="text-3">a software developer based in Turkey.</h1>
        </div>
      </div>
      <hr className="divider" />
    </div>
  );
};

export default Welcome;
