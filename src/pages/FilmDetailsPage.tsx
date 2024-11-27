import React, { useEffect} from 'react';
import FilmDetails from '../components/FilmDetails';
import { useParams } from 'react-router-dom';
import { useFilmApi } from '../util/useFilmApi';


const FilmDetailsPage: React.FC = () => {
  const { id } = useParams(); 
  const { film, fetchFilmById, loading } = useFilmApi();

  useEffect(() => {
    if (id) fetchFilmById(id);
  }, [id]);

  if (loading || !film) return <p>Loading...</p>;
  return (
    
    <div>
      <FilmDetails film ={film}/>
  </div>

  );
};

export default FilmDetailsPage;
