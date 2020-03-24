import React from 'react';
import '../styles/styles.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import Footer from './Footer';

function App() {
  return (
    <div className='app'>
      <main>
        <Router>
          <Routes />
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
