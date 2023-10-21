import React from 'react';

import Body from './components/Body';
import Header from './components/Header';
import './styles/App.css';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <Body />
      <Header />
    </div>
  );
}

export default App;
