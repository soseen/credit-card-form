import React from 'react';
import './styles/styles.css'
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes.js';
import Footer from './Footer.js';

function App() {
  return (
      <div className="App">
        <Router>
          <Routes />
        </Router>
        <Footer />
      </div>
  );
}

export default App;
