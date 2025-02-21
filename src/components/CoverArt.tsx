import React, { useState, useEffect } from 'react';
import { Song } from '../types/song';

interface CoverArtProps {
    song: Song | null;
}

export default function CoverArt({ song }: CoverArtProps) {
    const [showLyrics, setShowLyrics] = useState(false);
    const [lyrics, setLyrics] = useState<string | null>(null);

    useEffect(() => {
        if (song?.id) {
            console.log('Current song:', song);  // Add this to see the song data

            console.log('Cover URL:', song.cover);  // Add this to see the cover URL

            fetch(`http://localhost:5173/api/v1/lyrics/${song.id}`)
                .then(response => response.json())
                .then(data => setLyrics(data.lyrics))
                .catch(error => console.error('Error fetching lyrics:', error));
        }
    }, [song?.id]);

    if (!song) {
        return (
            <div className="flex w-full h-96 bg-gray-900 rounded-lg overflow-hidden">
                <img
                    src="/api/placeholder/256/256"
                    alt="Big Box"
                    className="w-full h-full object-cover"
                />
            </div>
        );
    }    

    return (
        <div 
            className="w-full h-96 rounded-lg overflow-hidden relative"
            onMouseEnter={() => setShowLyrics(true)}
            onMouseLeave={() => setShowLyrics(false)}
        >
            <img 
                src={song.cover}
                alt={`${song.title} Cover Art`}
                className="w-full h-full object-cover"
            />
            {showLyrics && lyrics && (
                <div className="absolute inset-0 bg-eucalyptus-300 bg-opacity-75 p-4 text-white overflow-y-auto">
                    <p>{lyrics}</p>
                </div>
            )}
        </div>
    );
}
