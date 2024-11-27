import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddFilm from './pages/AddFilm';
import FilmDetailsPage from './pages/FilmDetailsPage';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-film" element={<AddFilm />} />
        <Route path="/film/:id" element={<FilmDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;