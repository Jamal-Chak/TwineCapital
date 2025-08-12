import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './output.css';

// ✅ DO NOT wrap with ThemeProvider or AuthProvider here
// ✅ They are already included inside App.js

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
