import { useState, useEffect } from 'react';
import '../Stylesheets/App.css';

function Intro() {
  const intros = ["hi", "my name's Eray", "but you can call me hired ;)"];
  const [text, setText] = useState(intros[0]);

  useEffect(() => {
    let textIdx = 0; // We already know we're starting at 0, so initialize a new index tracker here
    let introInterval = setInterval(() => {
      if(textIdx < intros.length - 1) {
        console.log(textIdx);
        textIdx += 1;
        setText(intros[textIdx]);
      }
    }, 1000);

    return() => {
      clearInterval(introInterval);
    }
  }, []);

  return (
    <div className="intro">
      <header className="intro-header">
        <p key={text} className="intro-text">{text}</p>
      </header>
    </div>
  );
}

export default Intro;
