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
}

export default function CurrentlyPlaying({ song, isPlaying, onPlayPause }: CurrentlyPlayingProps) {
    return (
    <div className= "flex flex-col gap-6">
        <CoverArt song={song} />
        {song && <SongTitle title={song.title}  artist={song.artist} />}
        <PlayControls 
          isPlaying={isPlaying}
          onPlayPause={onPlayPause}
          isFirstSong={false}
          isLastSong={false}
          onPrevious={() => {}}
          onNext={() => {}}
          playbackSpeed={1}
          onSpeedChange={() => {}}
          isShuffled={false}
          onShuffleToggle={() => {}}
        />
        <VolumeControls />
        </div>
);
}