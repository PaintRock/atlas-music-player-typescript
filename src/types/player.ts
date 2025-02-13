export interface PlayerState {
    currentSong: Song | null;
    isPlaying: boolean;
    playbackSpeed: 0.5 | 1 | 2;
    volume: number;
    isShuffled: boolean;
  }
  