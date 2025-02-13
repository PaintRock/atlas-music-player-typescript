import React from 'react';
import { Volume2 } from 'lucide-react';

export default function VolumeControls() {
    return (
        <div className="w-full flex items-center gap-6 px-4">
            <Volume2 size={50} className="text-gray-600" />
            <input
            type="range"
            className="w-full h-5 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            min="0"
            max="100"
            defaultValue="50"
            />
        </div>
    );
};