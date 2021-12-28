import Welcome from "../Welcome/Welcome";
import Works from "../Works/Works";
import '../../Assets/Stylesheets/container.css'

const Container = () => {

  return(
    <div className="app-container">
      <Welcome />
      <Works />
    </div>
  )
};

export default Container;