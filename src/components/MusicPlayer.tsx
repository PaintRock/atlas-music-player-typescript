import { useState, useEffect } from "react";
import PlayList from "./PlayList";
import CurrentlyPlaying from "./CurrentlyPlaying";
import { Song } from '../types/song';

export default function MusicPlayer() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);

  useEffect(() => {
    // Updated to correct endpoint
    fetch('http://localhost:5173/api/v1/playlist')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Playlist data:', data);
        setSongs(data);
        if (data.length > 0) {
          setCurrentSong(data[0]);
        }
      })
      .catch(error => console.error('Error fetching playlist:', error));
  }, []);

  // Function to fetch song details when needed
  const fetchSongDetails = async (songId: string) => {
    try {
      const response = await fetch(`http://localhost:5173/api/v1/songs/${songId}`);
      const songData = await response.json();
      return songData;
    } catch (error) {
      console.error('Error fetching song details:', error);
    }
  };

  return ( 
    <div className="w-full p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
        <div className="border rounded-lg p-6 bg-white shadow-md">
          <CurrentlyPlaying
            song={currentSong}
          />
        </div>
        <div className="border rounded-lg p-6 bg-white shadow-md">
          <PlayList
            songs={songs}
            currentSong={currentSong}
            onSongSelect={setCurrentSong}
          />
        </div>
      </div>
    </div>
  );
}
