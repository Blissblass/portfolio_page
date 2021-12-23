import '../../Assets/Stylesheets/bio.css';
import placeholder from '../../Assets/Images/placeholder.png'

const Bio = () => {

  return(
    <div className="bio-container">
      <div className="bio">
        <img className="bio-image" src={placeholder} alt="My face :D" />
        <div className="bio-text">
          <h1>Hi there!</h1>
          <h1>I'm <span className="bio-span">Eray Alkış,</span></h1>
          <h1>a software developer based in Turkey.</h1>
        </div>
      </div>
    </div>
  )
};

export default Bio;