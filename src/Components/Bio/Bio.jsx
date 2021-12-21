import '../../Assets/Stylesheets/bio.css';
import placeholder from '../../Assets/Images/placeholder.png'

const Bio = () => {

  return(
    <div className="bio-container">
      <div className="bio">
        <img className="bio-image" src={placeholder} alt="My face :D" />
      </div>
    </div>
  )
};

export default Bio;