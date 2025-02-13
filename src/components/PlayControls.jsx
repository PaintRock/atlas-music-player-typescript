import React from 'react';
import { Shuffle, SkipBack, Play, SkipForward, Gauge } from 'lucide-react';

export default function PlayControls() {
  return (
    <div className="w-full flex items-center gap-20 py-6">
      <button className="p-3 text-gray-600 hover:text-gray-900 transition-colors">
        <Gauge size={40} />
      </button>
      <button className="p-3 text-gray-600 hover:text-gray-900 transition-colors">
        <SkipBack size={34} />
      </button>
      <button className="p-5 bg-gray-600 text-white rounded-full hover:bg-blue-700 transition-colors">
        <Play size={24} fill="currentColor" />
      </button>
      <button className="p-3 text-gray-600 hover:text-gray-900 transition-colors">
        <SkipForward size={34} />
      </button>
      <button className="p-3 text-gray-600 hover:text-gray-900 transition-colors">
        <Shuffle size={40} />
      </button>
    </div>
  );
};
