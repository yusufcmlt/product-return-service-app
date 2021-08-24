import { TicketProvider } from 'contexts/TicketContext';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { LanguageProvider } from './contexts/LanguageContext';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LanguageProvider>
        <TicketProvider>
          <App />
        </TicketProvider>
      </LanguageProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
