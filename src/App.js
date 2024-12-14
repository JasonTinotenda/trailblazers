import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components
import Home from './pages/Home'; // Import Home component
import './App.css';
import MainLayout from './Layout/MainLayout';

function App() {
  return (
    <div className="App">
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<h1>About Page</h1>} />
          </Routes>
        </MainLayout>        
      </Router>
    </div>
  );
}

export default App;
