import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Info from './components/pages/Info';
import Members from './components/pages/Members';
import Proposals from './components/pages/Proposals';

import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/members" element={<Members />} />
        <Route path="/proposals" element={<Proposals />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;