import React from 'react';
import './App.css';
import ItemBasedCF from './components/ItemBasedCF';
import UserSimilarityBased from './components/UserSimilarityBased';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FlickSense Recommendations</h1>
      </header>
      <ItemBasedCF />
      <UserSimilarityBased />
    </div>
  );
}

export default App;
