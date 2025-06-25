import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Watchlist from './Pages/Watchlist';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { WatchListProvider } from './context/WatchListContext';

// import './App.css'

function App() {

  return (
    <>
    <WatchListProvider>
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path='/'  element={<Home />}></Route>
      <Route path='/watchlist' element={<Watchlist />}></Route>
     </Routes>
     </BrowserRouter>
    </WatchListProvider>
    </>
  );
}

export default App
