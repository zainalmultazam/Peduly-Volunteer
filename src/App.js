import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Anggota from './pages/anggota/Anggota';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/anggota' element={<Anggota />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
