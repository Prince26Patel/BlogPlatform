<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ This is the correct import in React 18+
import App from './App';
import './index.css';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
=======
// File: src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
>>>>>>> 905cfa78de58142ff9b7f0d9dbd6282b28bcb328
  </React.StrictMode>
);
