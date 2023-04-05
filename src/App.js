import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MangaMain from './pages/manga/MangaMain';
import SportMain from './pages/sports/SportMain';
import TcgMain from './pages/tcg/TcgMain';
import VideoMain from './pages/videogames/VideoMain';
import MangaVolumeInfo from './pages/manga/MangaVolumeInfo';
import SportGenreInfo from './pages/sports/SportGenreInfo';
import SportPlayerInfo from './pages/sports/SportPlayerInfo';
import TcgSetInfo from './pages/tcg/TcgSetInfo';
import VideoConsoleInfo from './pages/videogames/VideoConsoleInfo';

function App() {
  return (
    <div className="App">
      <div className='sticky-nav'>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>

        {/* Main Pages: */}
        <Route path='/trading-cards' element={<TcgMain/>}/>
        <Route path='/sports-cards' element={<SportMain/>}/>
        <Route path='/video-games' element={<VideoMain/>}/>
        <Route path='/manga' element={<MangaMain/>}/>

        {/* Item Pages: */}
        <Route path='/trading-cards/:setId' element={<TcgSetInfo/>}/>
        <Route path='/sports-cards/:playerId' element={<SportPlayerInfo/>}/>
        <Route path='/sports-cards/:genreId' element={<SportGenreInfo/>}/>
        <Route path='/video-games/:consoleId' element={<VideoConsoleInfo/>}/>
        <Route path='/manga/:mangaId' element={<MangaVolumeInfo/>}/>

        {/* User Pages: */}
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
