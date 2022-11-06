import { useState, useEffect } from "react";
import Player from "./components/Player";

function App() {
  const [songs] = useState([
    {
      title: "Volver A los 17",
      artist: "Milton Nascimento",
      img_src: "./images/Geraes.jpg",
      src: "./music/Volver A Los Diecisiete - Milton Nascimento  Mercedes Sosa.mp3"
    },
    {
      title: "Take Five",
      artist: "Dave Brubeck and The Dave Brubeck Quartet",
      img_src: "./images/david brubeck quartet.jpg",
      src: "./music/Dave Brubeck, The Dave Brubeck Quartet - Take Five.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(()=>{
    setNextSongIndex(()=> {
      if (currentSongIndex + 1 > songs.length -1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
