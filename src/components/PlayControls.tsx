import React from 'react';
import { Shuffle, SkipBack, Play, Pause, SkipForward, Gauge } from 'lucide-react';

interface PlayControlsProps {
  isFirstSong: boolean;
  isLastSong: boolean;
  onPrevious: () => void;
  onNext: () => void;
  playbackSpeed: 0.5 | 1 | 2;
  onSpeedChange: (speed: 0.5 | 1 | 2) => void;
  isPlaying: boolean;
  onPlayPause: () => void;
  isShuffled: boolean;
  onShuffleToggle: () => void;
}


export default function PlayControls( {
  isFirstSong,
  isLastSong,
  onPrevious,
  onNext,
  playbackSpeed,
  onSpeedChange,
  isPlaying,
  onPlayPause,
  isShuffled,
  onShuffleToggle,
}: PlayControlsProps ) {
  const handleSpeedClick = () => {
    const speeds: (0.5 | 1 | 2)[] = [0.5, 1, 2];
    const currentIndex = speeds.indexOf(playbackSpeed);
    const nextSpeed = (currentIndex + 1) % speeds.length;
    onSpeedChange(speeds[nextSpeed]);
  };

  return (
    <div className="w-full flex items-center gap-20 py-6">
      <button className="p-3 text-gray-600 hover:text-gray-900 transition-colors"
        onClick={handleSpeedClick}
        >
        <div className="text-xs">{playbackSpeed}</div>
        <Gauge size={40} />
      </button>

      <button className="p-3 text-gray-600 hover:text-gray-900 transition-colors"
        onClick={onPrevious}
        disabled={isFirstSong} 
        >
          <SkipBack size={34} />
      </button>

      <button 
        className="p-5 bg-eucalyptus-800 text-white rounded-full hover:bg-eucalyptus-500 transition-colors"  // Changed from bg-gray-600
        onClick={onPlayPause}
      >
        {isPlaying ? <Pause size={34} /> : <Play size={34} />}
      </button>
      
      <button className="p-3 text-gray-600 hover:text-gray-900 transition-colors"
        onClick={onNext}
        disabled={isLastSong && !isShuffled}
        >
        <SkipForward size={34} />
      </button>

      <button 
    className={`p-3 transition-colors ${
        isShuffled ? 'text-eucalyptus-600' : 'text-gray-600 hover:text-gray-900'  // Added text-gray-600
    }`}
    onClick={onShuffleToggle}
>
    <Shuffle size={40} />
</button>
    </div>
  );
}

