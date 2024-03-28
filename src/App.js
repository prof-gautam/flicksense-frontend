import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemBasedCF from './components/ItemBasedCF';
import UserSimilarityBased from './components/UserSimilarityBased';
import Documentation from './components/Documentation';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>FlickSense Recommendations</h1>
        </header>

        <Routes>
          <Route path="/" element={
            <div className="content">
              <ItemBasedCF />
              <UserSimilarityBased />
            </div>
          } />
          <Route path="/documentation" element={<Documentation />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
