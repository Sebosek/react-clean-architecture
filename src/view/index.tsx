import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const el: HTMLElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(el);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
