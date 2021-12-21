import { useState, useEffect } from 'react';
import '../../Stylesheets/intro.css';

const Intro = () => {
  const intros = ["hi", "my name's Eray", "but you can call me hired ;)"]; // Use an array of strings to make maintaining easier
  const [text, setText] = useState(intros[0]);

  useEffect(() => {
    let textIdx = 0; // We already know we're starting at 0, so initialize a new index tracker here
    let introInterval = setInterval(() => {
      if(textIdx < intros.length - 1) {
        console.log(textIdx);
        textIdx += 1;
        setText(intros[textIdx]);
      } else {
        clearInterval(introInterval);
        console.log("intro done!");
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
      <header className="intro-header">
        <p key={text} className="intro-text">{text}</p> 
      </header>
    </div>
  );
}

export default Intro;
