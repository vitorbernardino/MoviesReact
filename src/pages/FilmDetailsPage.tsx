import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FilmDetails from '../components/FilmDetails';


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
  // const navigate = useNavigate();
  const [film, setFilm] = useState<Film | null>(null);
  // const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3001/films/${id}`)
      .then((res) => res.json())
      .then((data) => setFilm(data));
  }, [id]);

  // const handleDelete = () => {
  //   fetch(`http://localhost:3001/films/${id}`, { method: 'DELETE' }).then(() => navigate('/'));
  // };

  // const handleUpdate = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   fetch(`http://localhost:3001/films/${id}`, {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(film),
  //   }).then(() => setIsEditing(false));
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  //   if (film) {
  //     setFilm({ ...film, [e.target.name]: e.target.value });
  //   }
  // };

  if (!film) return <p>Loading...</p>;

  return (
    
    <div className="mt-6 flex gap-4">
      <FilmDetails film ={film}/>
   
  </div>

  );
};

export default FilmDetailsPage;
