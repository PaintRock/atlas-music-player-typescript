import React, { useState } from 'react';
import { Song } from '../types/song';
import placeholder from '../assets/placeholder.svg';

interface CoverArtProps {
    song: Song | null;
}

export default function CoverArt({ song} : CoverArtProps) {
    const [showLyrics, setShowLyrics] = useState(false);

    if (!song) {
        return (
            <div className="w-134 h-134 bg-gray-200 rounded-lg overflow-hidden relative">
                { placeholder }
            </div>
        );
    }
    return (
    <div 
        className= "w-134 h-134 bg-gray-200 rounded-lg overflow-hidden relative"
        onMouseEnter={() => setShowLyrics(true)}
        onMouseLeave={() => setShowLyrics(false)}
        >
        <img 
        src={song.artwork || 'api/placeholder.jpg'}
        alt={'${song.title} Cover Art'}
        className="w-full h-full object-cover"
        />
        {showLyrics && song.lyrics && (
            <div className="absolute inset-0 bg-eucalyptus-300 bg-opacity-75 p-4 text-white overflow-y-auto">
                <p>{song.lyrics}</p>
                </div>
        )}
    </div>
    );
}
