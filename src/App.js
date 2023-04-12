import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
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
import SportPlayerInfo from './pages/sports/SportPlayerInfo';
import TcgSetInfo from './pages/tcg/TcgSetInfo';
import VideoConsoleInfo from './pages/videogames/VideoConsoleInfo';
import Search from './pages/Search';
import ItemAnalytics from './pages/ItemAnalytics';
import Collection from './pages/Collection';
import Watchlist from './pages/Watchlist';

function App() {

  const location = useLocation();
  const hideNavbarFooter = ['/signup', '/login'].includes(location.pathname);


  return (
    <div className="App">
      {!hideNavbarFooter && (
        <div className='sticky-nav'>
          <Navbar/>
        </div>
      )}
      <Routes>
        <Route path='/' element={<Home/>}/>

        {/* Main Pages: */}
        <Route path='/trading-cards' element={<TcgMain/>}/>
        <Route path='/sports-cards' element={<SportMain/>}/>
        <Route path='/video-games' element={<VideoMain/>}/>
        <Route path='/manga' element={<MangaMain/>}/>

        {/* Set Pages: */}
        <Route path='/trading-cards/:setId' element={<TcgSetInfo/>}/>
        <Route path='/sports-cards/players/:playerId' element={<SportPlayerInfo/>}/>
        <Route path='/video-games/:consoleId' element={<VideoConsoleInfo/>}/>
        <Route path='/manga/:mangaId' element={<MangaVolumeInfo/>}/>

        <Route path='/search' element={<Search/>}/>

        {/* Item Pages */}
        <Route path='/trading-cards/:setId/:itemId' element={<ItemAnalytics/>}/>
        <Route path='/sports-cards/sports/:itemId' element={<ItemAnalytics/>}/>
        <Route path='/video-games/:consoleId/:itemId' element={<ItemAnalytics/>}/>
        <Route path='/manga/:mangaId/:itemId' element={<ItemAnalytics/>}/>

        {/* User Pages: */}
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/watchlist' element={<Watchlist/>}/>
        <Route path='/collection' element={<Collection/>}/>

      </Routes>
      {!hideNavbarFooter && <Footer/>}
    </div>
  );
}

export default App;
