import Welcome from "../Welcome/Welcome";
import Works from "../Works/Works";
import '../../Assets/Stylesheets/container.css'
import Bio from "../Bio/Bio";

const Container = () => {

  return(
    <div className="app-container">
      <div className="app-bg">
        <Navbar />
        <Welcome />
        <Works />
        <Bio />
      </div>
    </div>
  )
};

export default Container;