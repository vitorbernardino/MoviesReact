import React from 'react';

interface FilmCardProps {
  film: {
    id: number;
    name: string;
    rating: number;
    image: string;
  };
}

const FilmCard: React.FC<FilmCardProps> = ({ film }) => {
  return (
    <div className="group relative w-full h-64 overflow-hidden rounded-lg shadow-md bg-gray-800">
    <div className="group-hover:scale-105 transition-transform transform w-full h-full">
      <img
        src={film.image}
        alt={film.name}
        className="object-cover w-full h-full"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 text-sm">
        <h3 className="font-bold">{film.name}</h3>
        <p className="text-yellow-400">⭐ {film.rating}</p>
      </div>
    </div>
  </div>
  );
};

export default FilmCard;
