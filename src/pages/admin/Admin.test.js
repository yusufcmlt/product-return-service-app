import '@testing-library/jest-dom';

import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';

import Navbar from 'components/navbar/Navbar';
import TestWrapper from 'components/test-wrapper/TestWrapper';
import Admin from './Admin';

describe('login page tests', () => {
  beforeEach(() => {
    render(
      <TestWrapper>
        <Navbar />
        <Admin />
      </TestWrapper>
    );
  });
  test('if renders admin page', () => {
    expect(screen.getByTestId('test-admin-page')).toBeInTheDocument();
  });

  test('if shows error on login form using wrong credentials', async () => {
    const userNameField = screen.getByLabelText('Kullanıcı adınız');
    const passwordField = screen.getByLabelText('Şifreniz');
    const button = screen.getByRole('button');

    // const errorColor = '##b94545';

    await act(async () => {
      fireEvent.change(userNameField, { target: { value: 'aRandomUser' } });
      fireEvent.change(passwordField, { target: { value: 'aRandomPassword' } });
    });
    fireEvent.click(button);
    // expect(screen.findByTestId('test-stattext-adminUserName')).toHaveTextContent(
    //   'Giriş yapılamadı'
    // );
    expect(await screen.findByTestId('test-stattext-adminUserName')).toHaveStyle(
      'visibility:visible'
    );
  });
});
