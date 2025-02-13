import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

function App() {
  return (
    <div className="bg-eucalyptus-100 min-h-screen flex flex-col items-center">
      <main className="flex-1 p-8">
      <MusicPlayer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
