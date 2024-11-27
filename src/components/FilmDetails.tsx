import React from 'react';

interface FilmDetailsProps {
  film: {
    id: number;
    name: string;
    rating: number;
    image: string;
  };
}

const FilmDetails: React.FC<FilmDetailsProps> = ({ film }) => {
  return (
    <div className="relative bg-black text-white min-h-screen">
      <img
        src={film.image}
        alt={film.name}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
      />
     
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 p-8 md:p-16">
        <div className="w-full md:w-1/3">
          <img src={film.image} alt={film.name} className="mt-5 w-full rounded-xl shadow-lg border-4 border-white" />
        </div>
      </div>



    </div>

  );
};

export default FilmDetails;
