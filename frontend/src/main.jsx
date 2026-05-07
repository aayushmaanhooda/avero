import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import ChatWidget from './components/ChatWidget';
import Privacy from './pages/Privacy';
import WhatWeDo from './pages/WhatWeDo';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <ChatWidget />
    </BrowserRouter>
  </React.StrictMode>,
);
