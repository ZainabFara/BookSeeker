import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';  
import './index.css';  

// Här renderas App-komponenten som innehåller BrowserRouter och Routes
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

