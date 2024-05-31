import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Pixa from './Pixa';

const NotFound = () => {
  return <h2>404 Not Found</h2>;
};

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/pixa" element={<Pixa />} />
            <Route path="/" element={<div>Welcome to the Image Search App</div>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
