import React from 'react';
import { PlaylistSong, Song } from '../types/song'
import PlayListItem from './PlayListItem';

interface PlayListProps {
    songs: PlaylistSong[];
    currentSong: Song | null;
    onSongSelect: (song: PlaylistSong) => void;
}

export default function PlayList({ songs, currentSong, onSongSelect }: PlayListProps) {
    return (
        <div className="border rounded-lg overflow-hidden">
            <h2 className="flex px-4 py-3 font-bold border-b text-6x1">PLAYLIST</h2>
            {songs.map((song) => (
                <PlayListItem
                    key={song.id}
                    {...song}
                    className={currentSong?.id === song.id ? 'bg-eucalyptus-50' : ''}
                    onClick={() => {
                        console.log('Selecting song:', song); // Debug click handler
                        onSongSelect(song)}
                    }
                />
            ))}
        </div>
    );
}
