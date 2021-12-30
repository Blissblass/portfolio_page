import Welcome from "../Welcome/Welcome";
import Works from "../Works/Works";
import '../../Assets/Stylesheets/container.css'
import Bio from "../Bio/Bio";
import { useEffect } from "react";

const Container = () => {

  useEffect(() => {
    let scrollListener = document.addEventListener("scroll", () => {
      const bg = document.getElementById("bg");
      bg.style.backgroundPositionX = `${window.scrollX}px`;
    });

    return() => {
      document.removeEventListener("scroll", scrollListener);
    }
  })

  return(
    <div className="app-container">
      <div className="app-bg">
        <Welcome />
        <Works />
        <Bio />
      </div>
    </div>
  )
};

export default Container;