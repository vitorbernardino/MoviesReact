import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface Film {
  id: number;
  name: string;
  description: string;
  director: string;
  rating: number;
  image: string;
}

interface FilmDetailsProps {
  film: Film;
}

const FilmDetails: React.FC<FilmDetailsProps> = ({ film }) => {
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const [movie, setMovie] = useState<Film | null>(film);
  const { id } = useParams();

  useEffect(() => {
    setMovie(film);
  }, [film]);

  const handleDelete = () => {
    fetch(`http://localhost:3001/films/${id}`, { method: 'DELETE' }).then(() => navigate('/'));
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (movie) {
      fetch(`http://localhost:3001/films/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movie),
      }).then(() => setIsEditing(false));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (movie) {
      setMovie({ ...movie, [e.target.name]: e.target.value });
    }
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="relative bg-black text-white min-h-screen">
      <img
        src={movie.image || ''}
        alt={movie.name}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 p-8 md:p-16">
        <div className="w-full md:w-1/3">
          <img src={movie.image} alt={movie.name} className="mt-5 w-full rounded-xl shadow-lg border-4 border-white" />
        </div>

        <div className="mt-5 w-full md:w-2/3">
          {isEditing ? (
            <form onSubmit={handleUpdate} className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg">
              {/* Nome */}
              <div>
                <label htmlFor="name" className="text-lg text-white font-semibold">Name:</label>
                <input
                  name="name"
                  value={movie.name}
                  onChange={handleChange}
                  className="w-full p-3 text-black rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>
              {/* Descrição */}
              <div>
                <label htmlFor="description" className="text-lg text-white font-semibold">Description:</label>
                <textarea
                  name="description"
                  value={movie.description}
                  onChange={handleChange}
                  className="w-full p-3 text-black rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>
              {/* Diretor */}
              <div>
                <label htmlFor="director" className="text-lg text-white font-semibold">Director:</label>
                <input
                  name="director"
                  value={movie.director}
                  onChange={handleChange}
                  className="w-full p-3 text-black rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>
              {/* Avaliação */}
              <div>
                <label htmlFor="rating" className="text-lg text-white font-semibold">Rating:</label>
                <select
                  name="rating"
                  value={movie.rating}
                  onChange={handleChange}
                  className="w-full p-3 text-black rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <option key={star} value={star}>
                      {star} Star{star > 1 && 's'}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-6 flex gap-4">
                <button
                  type="submit"
                  className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="w-full py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div>
              <h1 className="text-4xl font-bold mb-4">{movie.name}</h1>
              <p className="mt-4">{movie.description}</p>
              <p className="mt-2">
                <span className="font-semibold">Director:</span> {movie.director}
              </p>
              <p className="mt-2">
                <span className="font-semibold">Rating:</span> ⭐ {movie.rating}
              </p>

              <div className="mt-6 flex gap-4">
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-green-600 px-4 py-2 rounded-lg shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600"
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-red-600 px-4 py-2 rounded-lg shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilmDetails;
