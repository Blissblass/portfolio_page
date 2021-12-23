import '../../Assets/Stylesheets/bio.css';
import placeholder from '../../Assets/Images/placeholder.png'

const Bio = () => {

  return(
    <div className="bio-container">
      <div className="bio">
        <img className="bio-image" src={placeholder} alt="My face :D" />
        <h2>Hi, i'm Eray -- a self taught developer from Turkey.</h2>
      </div>
    </div>
  )
};

export default Bio;