import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Create a root for React to render to
const container = document.getElementById('root');
const root = createRoot(container);

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);