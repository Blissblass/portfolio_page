import Welcome from "../Welcome/Welcome";
import Works from "../Works/Works";
import '../../Assets/Stylesheets/container.css'
import Bio from "../Bio/Bio";
import { useEffect } from "react";

const Container = () => {

  useEffect(() => {
    let scrollListener = document.addEventListener("scroll", () => {
      const bg = document.getElementById("bg");
    });

    return() => {
      document.removeEventListener(scrollListener);
    }
  })

  return(
    <div className="app-container">
      <Welcome />
      <Works />
      <Bio />
    </div>
  )
};

export default Container;