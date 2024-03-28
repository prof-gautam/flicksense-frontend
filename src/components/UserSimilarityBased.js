import React, { useState } from 'react';
import axiosInstance from './axiosInstance';
import '../css/RecommendationStyles.css';

function UserSimilarityBased() {
  const [userId, setUserId] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSuggestions = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get(`/user-similarity-based/${userId}`);
      if (response.data && response.data.recommendations && Array.isArray(response.data.recommendations)) {
        setSuggestions(response.data.recommendations);
      } else {
        throw new Error('Unexpected data format received.');
      }
    } catch (err) {
      setError(err.message);
      setSuggestions([]);
    }
    setIsLoading(false);
  };

  return (
    <div className="recommendation-container">
      <h2>Find Movies Liked by Similar Users</h2>
      <div className="input-group">
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter user ID"
          className="input-field"
        />
        <button onClick={fetchSuggestions} disabled={isLoading} className="action-button">
          {isLoading ? <div className="loader"></div> : "Get Suggestions"}
        </button>
      </div>
      {error && <div className="status-message error">{error}</div>}
      <div className="recommendation-list">
        {suggestions.map((suggestion, index) => (
          <div key={index} className="recommendation-card">
            <p className="movie-title">{suggestion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserSimilarityBased;
