import '@testing-library/jest-dom';

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import { LanguageProvider } from '../../contexts/LanguageContext';

describe('navbar tests', () => {
  test('navigates to given path when clicked', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <LanguageProvider>
          <Navbar />
        </LanguageProvider>
      </Router>
    );

    const testNavLink = screen.getByTestId('navbar-link');
    fireEvent.click(testNavLink);
    expect(history.location.pathname).toBe('/admin');
  });
});
