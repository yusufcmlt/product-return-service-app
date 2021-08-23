import '@testing-library/jest-dom';

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Header from './Header';
import TestWrapper, { testHistory } from '../test-wrapper/TestWrapper';

describe('navbar tests', () => {
  test('if navigates to given path when clicked', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    );

    const testNavLink = screen.getByTestId('navbar-link-admin');
    fireEvent.click(testNavLink);
    expect(testHistory.location.pathname).toBe('/admin');
  });
});
