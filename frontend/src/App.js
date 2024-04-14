// App.js
import React from 'react';
import Navbar from './components/Navbar';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
}

export default App;
