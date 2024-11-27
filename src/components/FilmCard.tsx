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
    <div className="group relative">
      <div className="group-hover:scale-105">
        <img
          src={film.image}
          alt={film.name}
          className="rounded-lg shadow-md transition-transform transform"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 text-sm rounded-b-lg">
          <h3 className="font-bold">{film.name}</h3>
          <p className="text-yellow-400">⭐ {film.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
