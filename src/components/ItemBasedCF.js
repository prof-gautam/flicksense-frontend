import React, { useState } from 'react';
import axiosInstance from './axiosInstance';
import '../css/RecommendationStyles.css';

function ItemBasedCF() {
  const [movie, setMovie] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecommendations = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get(`/title-item-based-cf/${movie}`);
      if (Array.isArray(response.data.recommendations)) {
        setRecommendations(response.data.recommendations);
      } else {
        setError('Unexpected data format received.');
        setRecommendations([]);
      }
    } catch (err) {
      setError(err.message);
      setRecommendations([]);
    }
    setIsLoading(false);
  };

  return (
    <div className="recommendation-container">
      <div className="search-area">
        <h2 className="search-title">Discover Your Next Favorite Movie</h2>
        <div className="input-group">
          <input
            type="text"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
            placeholder="Enter movie title"
            className="input-field"
          />
          <button onClick={fetchRecommendations} disabled={isLoading} className="search-button">
            <i className="fas fa-search"></i>Search
          </button>
        </div>
      </div>
      {isLoading && <div className="loader"></div>}
      {error && <div className="status-message error">{error}</div>}
      <div className="recommendation-list">
        {recommendations.map((title, index) => (
          <div key={index} className="recommendation-card">
            <p className="movie-title">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemBasedCF;
