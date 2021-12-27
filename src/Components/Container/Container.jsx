import Bio from "../Bio/Bio";
import Works from "../Works/Works";
import '../../Assets/Stylesheets/container.css'

const Container = () => {

  return(
    <div className="app-container">
      <Bio />
      <Works />
    </div>
  )
};

export default Container;