import React from 'react';

import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
