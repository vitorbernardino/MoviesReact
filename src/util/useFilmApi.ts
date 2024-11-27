import { useState} from 'react';

interface Film {
  id: number;
  name: string;
  description?: string;
  director?: string;
  rating: number;
  image: string;
}

export const useFilmApi = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [film, setFilm] = useState<Film | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const BASE_URL = 'http://localhost:3001/films';

  // Fetch all films
  const fetchFilms = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(BASE_URL);
      const data = await res.json();
      setFilms(data);
    } catch (err) {
      console.log(err);
      setError('Failed to fetch films');
    } finally {
      setLoading(false);
    }
  };

  // Fetch a single film
  const fetchFilmById = async (id: number | string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${BASE_URL}/${id}`);
      const data = await res.json();
      setFilm(data);
    } catch (err) {
      console.log(err);
      setError('Failed to fetch film');
    } finally {
      setLoading(false);
    }
  };

  // Add a new film
  const addFilm = async (newFilm: Omit<Film, 'id'>) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newFilm),
      });
      if (!res.ok) throw new Error('Failed to add film');
      fetchFilms(); 
    } catch (err) {
      console.log(err);
      setError('Failed to add film');
    } finally {
      setLoading(false);
    }
  };

  // Update an existing film
  const updateFilm = async (id: number | string, updatedFilm: Partial<Film>) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedFilm),
      });
      if (!res.ok) throw new Error('Failed to update film');
      fetchFilmById(id); 
    } catch (err) {
        console.log(err);
        setError('Failed to update film');
    } finally {
      setLoading(false);
    }
  };

  // Delete a film
  const deleteFilm = async (id: number | string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete film');
      fetchFilms();
    } catch (err) {
        console.log(err);
        setError('Failed to delete film');
    } finally {
      setLoading(false);
    }
  };

  return {
    films,
    film,
    loading,
    error,
    fetchFilms,
    fetchFilmById,
    addFilm,
    updateFilm,
    deleteFilm,
  };
};
