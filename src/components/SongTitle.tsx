import React from 'react';


export default function SongTitle({ title ="Song Title", artist = "Artist Name" }) {
  console.log('SongTitle receiving:', { title, artist });
  return (
    <div className="text-left px-4 py-2">
      <h2 className="text-5xl font-bold">{title}</h2>
      <p className="text-gray-600">{artist}</p>
    </div>
  );
}