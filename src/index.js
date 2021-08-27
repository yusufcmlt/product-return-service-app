import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { TicketProvider } from 'contexts/TicketContext';
import App from 'App';

import './index.scss';
import { AuthProvider } from 'contexts/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <TicketProvider>
          <App />
        </TicketProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
