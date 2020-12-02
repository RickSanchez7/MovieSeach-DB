import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { NavbarProvider } from './context/navbar.context';

import 'bulma/css/bulma.css';
import './sass/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <NavbarProvider>
      <App />
    </NavbarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
