import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import DetailSong from './components/DetailSong';
import ListSong from './components/ListSong';
import { Songs } from "./context";
import DataSongs from "./data/songs.json"
import Playing from './components/Playing';
function App() {
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs }}>
        <Navbar />
        <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player'>
          {/* span 1 */}
          <DetailSong />
          {/* span 2 */}
          <ListSong />
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default App;
