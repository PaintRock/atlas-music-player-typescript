// src/types/song.ts
export interface Song {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: number;
}

   

export interface Song extends PlaylistSong {
  cover?: string;   
  song?: string;    
}