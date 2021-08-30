import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import TestAuthWrapper from 'components/test-wrapper/TestAuthWrapper';
import Header from './Header';
import TestWrapper, { testHistory } from '../test-wrapper/TestWrapper';

describe('navbar tests', () => {
  test('if navigates to given path when clicked', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    );

    const testNavLink = screen.getByTestId('test-login-button');
    fireEvent.click(testNavLink);
    expect(testHistory.location.pathname).toBe('/admin');
  });

  test('if shows dashboard link and logout button when user is authorized', () => {
    render(
      <TestWrapper authValues={{ isAdmin: true }}>
        <Header />
      </TestWrapper>
    );

    const dashBoardLink = screen.getByTestId('test-dashboard-link');
    const logoutButton = screen.getByTestId('test-logout-button');

    expect(dashBoardLink).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
  });

  test('if clicking logout button renders login button back', () => {
    render(
      <TestAuthWrapper>
        {(value) => (
          <>
            <Header />
            <button
              type="button"
              data-testid="test-login-button-render"
              onClick={value.loginAsAdmin}
            >
              Login
            </button>
          </>
        )}
      </TestAuthWrapper>
    );

    // Login as admin
    const loginButton = screen.getByTestId('test-login-button-render');
    fireEvent.click(loginButton);

    // Logout as an admin
    const logoutButton = screen.getByTestId('test-logout-button');
    expect(logoutButton).toBeInTheDocument();
    fireEvent.click(logoutButton);

    // Check login button renders back
    const loginLink = screen.getByTestId('test-login-button');
    expect(loginLink).toBeInTheDocument();
  });
});
