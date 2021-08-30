import '@testing-library/jest-dom';

import React from 'react';
import { act, render, screen, fireEvent, cleanup } from '@testing-library/react';

import TestWrapper from 'components/test-wrapper/TestWrapper';
import Admin from './Admin';
import LoginForm from './components/LoginForm';

describe('login page tests', () => {
  test('if admin page is not present when isAdmin is true', () => {
    render(
      <TestWrapper authValues={{ isAdmin: true }}>
        <Admin />
      </TestWrapper>
    );
    expect(screen.queryByTestId('test-admin-page')).not.toBeInTheDocument();
  });

  test('if shows error on login form using wrong credentials', async () => {
    let mockErrorShown = false;
    const mockSubmit = () => {
      console.log('called');
      mockErrorShown = true;
    };

    render(<LoginForm onSubmit={mockSubmit} isErrorShown={mockErrorShown} />);

    const userNameField = screen.getByLabelText('Kullanıcı adınız');
    const passwordField = screen.getByLabelText('Şifreniz');
    const button = screen.getByRole('button');

    await act(async () => {
      fireEvent.change(userNameField, { target: { value: 'aRandomUser' } });
      fireEvent.change(passwordField, { target: { value: 'aRandomPassword' } });
    });
    fireEvent.click(button);
    cleanup();
    console.log(mockErrorShown);
    render(<LoginForm onSubmit={mockSubmit} isErrorShown={mockErrorShown} />);

    expect(screen.getByTestId('test-stattext-adminUserName')).toHaveStyle('visibility:visible');
  });
});
