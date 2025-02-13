import { useState } from "react";
import PlayList from "./PlayList";
import CurrentlyPlaying from "./CurrentlyPlaying";

export default function MusicPlayer() {
  const [currentSong, setCurrentSong] = useState({
    title: "Painted in Blue",
    artist: "Soul Canvas",
    duration: "5:55",
  });
  console.log('MusicPlayer state:', currentSong);
  
  return ( 
    <div className="w-full p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
        <div className="border rounded-lg p-6 bg-white shadow-md">
    <CurrentlyPlaying
    title={currentSong.title}
    artist={currentSong.artist}
    />
    </div>

    
    <div className="border rounded-lg p-6 bg-white shadow-md">
    <PlayList
          currentSong={currentSong}
          onSongSelect={(song) => {
            console.log('Setting new song:', song);
            setCurrentSong(song);
          }}
        />
        </div>
      </div>
    </div>

  );
}
