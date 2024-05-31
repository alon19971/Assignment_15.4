import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './App.css'; 

const Pixa = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get('s') || 'cats';
    fetchImages(searchQuery);
  }, [searchParams]);

  const fetchImages = async (searchQuery) => {
    const API_KEY = '15489555-318fdsaf374a1ce3ea'; // Replace with your Pixabay API key
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&pretty=true`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setImages(data.hits);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ s: query });
  };

  return (
    <div>
      <h2>Image Search</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for images..."
        />
        <button type="submit">Search</button>
      </form>
      <div className="image-grid">
        {images.map((image) => (
          <a key={image.id} href={image.largeImageURL} target="_blank" rel="noopener noreferrer">
            <img src={image.webformatURL} alt={image.tags} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Pixa;
