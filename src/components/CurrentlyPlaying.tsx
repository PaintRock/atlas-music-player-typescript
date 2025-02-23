import React from 'react';
import { Song } from '../types/song';
import CoverArt from './CoverArt';
import SongTitle from './SongTitle';  
import PlayControls from './PlayControls';
import VolumeControls from './VolumeControls';


interface CurrentlyPlayingProps {
    song: Song | null;
    isPlaying: boolean;
    onPlayPause: () => void;
    isFirstSong: boolean;
    isLastSong: boolean;
    onPrevious: () => void;
    onNext: () => void;
    volume: number;
    onVolumeChange: (volume: number) => void;
    playbackSpeed: 0.5 | 1 | 2;
    onSpeedChange: (speed: 0.5 | 1 | 2) => void;
}

export default function CurrentlyPlaying({ 
  song, 
  isPlaying, 
  onPlayPause,
  isFirstSong,
  isLastSong,
  onNext,
  onPrevious,
  volume,
  onVolumeChange,
  playbackSpeed,
  onSpeedChange
 }: CurrentlyPlayingProps) {
    return (
    <div className= "flex flex-col gap-6">
        <CoverArt song={song} />
        {song && <SongTitle title={song.title}  artist={song.artist} />}
        <PlayControls 
          isPlaying={isPlaying}
          onPlayPause={onPlayPause}
          isFirstSong={isFirstSong}
          isLastSong={isLastSong}
          onPrevious={onPrevious}
          onNext={onNext} 
          playbackSpeed={playbackSpeed}
          onSpeedChange={onSpeedChange}
          isShuffled={false}
          onShuffleToggle={() => {}}
        />
        <VolumeControls 
          volume={volume}
          onVolumeChange={onVolumeChange}
          />
        </div>
);
}