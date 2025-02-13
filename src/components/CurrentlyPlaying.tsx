import React from 'react';
import { Song } from '../types/song';
import CoverArt from './CoverArt';
import SongTitle from './SongTitle';  
import PlayControls from './PlayControls';
import VolumeControls from './VolumeControls';


interface CurrentlyPlayingProps {
    song: Song | null;
}

export default function CurrentlyPlaying({ song }: CurrentlyPlayingProps) {
    return (
    <div className= "flex flex-col gap-6">
        <CoverArt song={song} />
        {song && <SongTitle title={song.title}  artist={song.artist} />}
        <PlayControls />
        <VolumeControls />
        </div>
);
}