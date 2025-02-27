import { useState, useEffect } from "react";
import PlayList from "./PlayList";
import CurrentlyPlaying from "./CurrentlyPlaying";
import { Song } from '../types/song';
import {PlaylistSong, Song} from '../types/song';

export default function MusicPlayer() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [volume, setVolume] = useState(50);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isShuffled, setIsShuffled] = useState(false);
  
  const handleShuffleToggle = () => {
    setIsShuffled(!isShuffled);
  };

  const handleSpeedChange = (newSpeed: 0.5 | 1 | 2) => {
    setPlaybackSpeed(newSpeed);
  };
  
  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
  };

  const handlePrevious = async () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      const prevSong = songs[prevIndex];
      const fullDetails = await fetchSongDetails(prevSong.id);
      setCurrentSong(fullDetails);
      setCurrentIndex(prevIndex);
    }
  };
  const handleNext = async () => {
    if (currentIndex < songs.length - 1) {
      const nextIndex = currentIndex + 1;
      const nextSong = songs[nextIndex];
      const fullDetails = await fetchSongDetails(nextSong.id);
      setCurrentSong(fullDetails);
      setCurrentIndex(nextIndex);
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  
  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:5173/api/v1/playlist')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(async (data) => {
        console.log('Playlist data:', data);
        setSongs(data);
        if (data.length > 0) {
          const fullDetails = await fetchSongDetails(data[0].id);
          setCurrentSong(fullDetails);
        }
        setLoading(false);
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
  const handleSongSelect = async (song: Song) => {
    const fullDetails = await fetchSongDetails(song.id);
    const selectIndex = songs.findIndex(s => s.id === song.id);
    setCurrentIndex(selectIndex);
    setCurrentSong(fullDetails);
  };

  return ( 
    <div className="w-full p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
        <div className="border rounded-lg p-6 bg-white shadow-md">
          <CurrentlyPlaying
            song={currentSong}
            isPlaying={isPlaying}
            onPlayPause={handlePlayPause}
            isFirstSong={currentIndex === 0}
            isLastSong={currentIndex === songs.length - 1}
            onNext={handleNext}
            onPrevious={handlePrevious}
            volume={volume}
            onVolumeChange={handleVolumeChange}
            playbackSpeed={playbackSpeed}
            onSpeedChange={handleSpeedChange}
            isShuffled={isShuffled}
            onShuffleToggle={() => setIsShuffled(!isShuffled)}
          />
        </div>
        <div className="border rounded-lg p-6 bg-white shadow-md">
          <PlayList
            songs={songs}
            currentSong={currentSong}
            onSongSelect={handleSongSelect}
          />
        </div>
      </div>
    </div>
  );
  };
