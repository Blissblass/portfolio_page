import { useState, useEffect } from 'react';
import '../../Assets/Stylesheets/intro.css';

const Intro = (props) => {
  const intros = ["hi", "my name's Eray", "but you can call me hired ;)"]; // Use an array of strings to make maintaining easier
  const [text, setText] = useState(intros[0]);
  const [isOver, setIsOver] = useState(false);
  const { setPlayingIntro } = props;

  useEffect(() => {
    let textIdx = 0; // We already know we're starting at 0, so initialize a new index tracker here
    let introInterval = setInterval(() => {
      if(textIdx < intros.length - 1) {
        console.log(textIdx);
        textIdx ++;
        setText(intros[textIdx]);
      } else {
        clearInterval(introInterval);
        console.log("intro done!");
        setIsOver(true);
        setPlayingIntro(false);
      }
    }, 2000);

    return() => {
      clearInterval(introInterval); // Keep this part for future skip button
    }
  }, []);

 // We use a key={} on the <p> element because React re-renders an element if it's key changes, we do this to ensure our fade anim
  // plays on every single time {text} changes.

  return (
    <div className="intro">
      <header className={`intro-header${isOver ? " header-fade" : ""}`}>
        <p key={text} className="intro-text">{text}</p> 
      </header>
    </div>
  );
}

export default Intro;
