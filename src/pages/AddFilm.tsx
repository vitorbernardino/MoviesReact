import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddFilm: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    director: '',
    rating: 1,
    image: '',
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('http://localhost:3001/films', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    }).then(() => navigate('/'));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-black bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-red-600">Add a New Film</h2>
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Film Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 rounded-lg focus:ring-red-500 focus:outline-none"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 rounded-lg focus:ring-red-500 focus:outline-none"
            required
          />
        </div>
        <div>
          <label htmlFor="director" className="block text-sm font-medium">
            Director
          </label>
          <input
            type="text"
            id="director"
            name="director"
            value={form.director}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 rounded-lg focus:ring-red-500 focus:outline-none"
            required
          />
        </div>
        <div>
          <label htmlFor="rating" className="block text-sm font-medium">
            Rating
          </label>
          <select
            id="rating"
            name="rating"
            value={form.rating}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 rounded-lg focus:ring-red-500 focus:outline-none"
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <option key={star} value={star}>
                {star} Star{star > 1 && 's'}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-medium">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={form.image}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 rounded-lg focus:ring-red-500 focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 py-2 rounded-lg hover:bg-red-700 focus:ring focus:ring-red-500"
        >
          Add Film
        </button>
      </form>
    </div>
  );
};

export default AddFilm;