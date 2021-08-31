import '@testing-library/jest-dom';

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Home from './Home';

import TestWrapper, { testHistory } from '../../components/test-wrapper/TestWrapper';
import { CHECK_TICKET, NEW_TICKET } from '../../routes/RouteContstants';

describe('home page tests', () => {
  beforeEach(() => {
    render(
      <TestWrapper>
        <Home />
      </TestWrapper>
    );
  });

  test('if renders homepage component', () => {
    expect(screen.getByTestId('app-homepage')).toBeInTheDocument();
  });

  test('if buttons navigate to their path', () => {
    const [buttonNew, buttonCheck] = screen.getAllByRole('button');

    fireEvent.click(buttonNew);
    expect(testHistory.location.pathname).toBe(NEW_TICKET);
    fireEvent.click(buttonCheck);
    expect(testHistory.location.pathname).toBe(CHECK_TICKET);
  });
});
