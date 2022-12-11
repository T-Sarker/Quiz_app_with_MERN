import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './app.css'
import { AuthProvider } from './context/AuthProvider';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <CookiesProvider>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </CookiesProvider>
    </AuthProvider>
  </BrowserRouter >
);

