import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

// Get the root element
const rootElement = document.getElementById('root');

// Create a root
const root = createRoot(rootElement);

// Render the main App component into the root element
root.render(<App />);