import React from 'react';
import placeholder from '../assets/placeholder.svg';

export default function CoverArt() {
    return (
    <div className= "w-134 h-134 bg-gray-200 rounded-lg overflow-hidden">
        <img 
        src={placeholder}
        alt="Cover Art" 
        className="w-full h-full object-cover"
        />
    </div>
    );
}
