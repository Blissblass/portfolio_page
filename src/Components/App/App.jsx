import { useState } from "react";
import Bio from "../Bio/Bio";
import Intro from "../Intro/Intro";

const App = () => {
  const [playingIntro, setPlayingIntro] = useState(true);

  return(
    <div>
      <Intro setPlayingIntro={setPlayingIntro} />
      {playingIntro ? 
        null
      :
        <Bio />
      }
    </div>
  )
};

export default App;