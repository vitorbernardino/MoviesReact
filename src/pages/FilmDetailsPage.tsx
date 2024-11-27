import React, { useEffect, useState } from 'react';
import FilmDetails from '../components/FilmDetails';
import { useParams } from 'react-router-dom';


interface Film {
  id: number;
  name: string;
  description: string;
  director: string;
  rating: number;
  image: string;
}

const FilmDetailsPage: React.FC = () => {
  const { id } = useParams(); 
  const [film, setFilm] = useState<Film | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3001/films/${id}`)
      .then((res) => res.json())
      .then((data) => setFilm(data));
  }, [id]);


  if (!film) return <p>Loading...</p>;

  return (
    
    <div>
      <FilmDetails film ={film}/>
  </div>

  );
};

export default FilmDetailsPage;
