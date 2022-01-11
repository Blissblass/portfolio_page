import { useState } from "react";
import Intro from "../Intro/Intro";
import Container from "../Container/Container";

const App = () => {
  const [playingIntro, setPlayingIntro] = useState(true);

  return (
    <div>
      <Intro setPlayingIntro={setPlayingIntro} />
      {playingIntro ? null : <Container />}
    </div>
  );
};

export default App;
