import "../../Assets/Stylesheets/bio.css";
import Contact from "../Contact/Contact";

const Bio = () => {
  return (
    <div className="bio-container">
      <h1 className="bio-header">About Me</h1>
      <div className="bio">
        <div className="bio-text">
          <p>Hello there! I'm Eray Alkış.</p>
          <p>
            At the start of 2021, I discovered The Odin Project and App Academy
            Open, open source curriculums written by experienced developers that
            teach almost everything needed to become a capable full-stack
            developer.
          </p>
          <p>
            They both have amazing, well-written courses, and projects range
            from some hand-holding at the start to "Build a chess app from
            scratch!". I was hooked and just <strong>had</strong> to learn how
            to do that.
          </p>
          <p>
            I spent every single day of the pandemic getting stuck again and
            again until I figured out how to get unstuck. I made tons of
            mistakes and learned something from each one.
          </p>
          <p>
            I graduated from App Academy Open in June of 2021, and have worked
            as a freelancer until now. I've learned a lot from my experiences
            and keep on improving myself every single day.
          </p>
          <p>
            More recently though, I've been working on personal projects and
            learning mobile development with React Native and new backend
            technologies like ASP.NET.
          </p>
          <p>
            Currently, I'm looking to join a close-knit team that would welcome
            a detail-oriented, ambitious fast learner!
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Bio;
