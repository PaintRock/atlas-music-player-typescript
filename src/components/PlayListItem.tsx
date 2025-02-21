import React from 'react';
import { formatDuration } from '../utils/formatTime';

interface PlayListItemProps {
    id: string;
    title: string;
    artist: string;
    duration: number;
    onClick?: () => void;
    className?: string;
}

export default function PlayListItem({ 
    title,
    artist,
    duration,
    onClick, 
    className = ""
}: PlayListItemProps)
 {
    return (
        
        <div className={`flex items-center justify-between py-3 px-4 hover:bg-gray-50 cursor-pointer ${className}`}
            onClick={onClick}
        >
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900">{title}</span>
                <span className="text-md text-gray-600">{artist}</span>
            </div>
            <span className="text-md text-gray-600">{formatDuration(duration)}</span>
        </div>
    );
}