import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <Link to="/projects">Projects</Link>
      </div>
      <div>
        <Link to="/tasks">Tasks</Link>
      </div>
    </div>
  );
}

export default App;
