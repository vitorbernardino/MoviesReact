import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FilmCard from '../components/FilmCard'; 

interface Film {
  id: number;
  name: string;
  rating: number;
  image: string;
}

const Home: React.FC = () => {
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/films')
      .then((res) => res.json())
      .then((data) => setFilms(data));
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white pt-20 px-6">
      <h2 className="text-3xl font-bold mb-8">Trending Films</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {films.map((film) => (
          <Link to={`/film/${film.id}`} key={film.id}>
            <FilmCard film={film} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
