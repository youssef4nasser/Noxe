import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const basename = process.env.NODE_ENV === 'production' ? '/Noxe' : '/';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={basename}>
  <App/>
  </BrowserRouter>,
);