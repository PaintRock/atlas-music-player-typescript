import React from 'react';
import { Volume, Volume2 } from 'lucide-react';

interface VolumeControlsProps {
    volume: number;
    onVolumeChange: (volume: number) => void;
}

export default function VolumeControls( { 
    volume,
    onVolumeChange,
}: VolumeControlsProps) {
    return (
        <div className="w-full flex items-center gap-6 px-4">
            <Volume2 size={50} className="text-gray-600" />
            <input
            type="range"
            className="w-full h-5 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            min="0"
            max="100"
            volume={volume}
            onChange={(e) => onVolumeChange(Number(e.target.value))}
            />
            <span className="text-sm text-gray-600 w-8">{volume}</span>
        </div>
    );
};