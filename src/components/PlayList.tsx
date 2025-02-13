import PlayListItem from './PlayListItem';

export default function PlayList({ currentSong, onSongSelect }) {
    const songs = [
        {
            title: "Painted in Blue",
            artist: "Soul Canvas",
            duration: "5:55",
        },
        {
            title: "Tidal Drift",
            artist: "Echoes of the Sea",
            duration: "8:02",
        },
        {
            title: "Fading Shadows",
            artist: "The Emberlight",
            duration: "3:01",
        },
        {
            title: "Cosmic Drift",
            artist: "Solar Flare",
            duration: "5:01",
        },
        {
            title: "Urban Serenade",
            artist: "Midnight Groove",
            duration: "4:54",
        },
        {
            title: "Whispers in the Wind",
            artist: "Rust & Ruin",
            duration: "6:13",
        },
        {
            title: " Electric Fever",
            artist: "Neon Jungle",
            duration: "8:41",
        },
        {
            title: "Edge of the Abyss",
            artist: "Steel Horizon",
            duration: "2:27",
        },
        {
            title: "Golden Haze",
            artist: "Steel Horizon",
            duration: "2:27",
        },
        {
            title: "Shatter the Silence",
            artist: "Thunderclap Echo",
            duration: "8:22",
        },
        {
            title: "Tired of Typing this List",
            artist: "Superknodva", 
            duration: "2:27",
        }
    ];
    
    return (
        <div className="overflow-hidden">
            <h2 className="flex px-4 py-3 font-bold border-b text-6x1">PLAYLIST</h2>
            {songs.map((song) => (
                <PlayListItem
                    key={song.title}
                    {...song}
                    className={currentSong?.title === song.title ? 'bg-blue-50' : ''}
                    onClick={() => {
                        console.log('Selecting song:', song); // Debug click handler
                        onSongSelect(song);
                    }}
                />
            ))}
        </div>
    );
}
