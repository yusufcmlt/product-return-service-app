/* eslint-disable */
import React from 'react';
import { render, screen, fireEvent, cleanup, act } from '@testing-library/react';
import NewReturn from './NewReturn';
import TestWrapper from 'components/test-wrapper/TestWrapper';

describe('New return page form tests', () => {
  beforeEach(() => {
    render(
      <TestWrapper>
        <NewReturn />
      </TestWrapper>
    );
  });

  test('if ticket form renders', () => {
    expect(screen.getByTestId('app-new-return-page')).toBeInTheDocument();
  });

  test('if ticket form submit button is not disabled on initial render', () => {
    expect(screen.getByRole('button')).not.toBeDisabled();
  });

  test('if select element has a value by default', () => {
    const selectElement = screen.getByLabelText('İade nedeni');
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveValue();
  });

  test('if id number shows length error when input value lenght is lower than 11', async () => {
    const idNumberField = screen.getByLabelText('TC No');
    await act(async () => {
      fireEvent.change(idNumberField, { target: { value: '123' } });
    });

    expect(screen.getByTestId('test-stattext-ticketIdNumber')).toHaveTextContent(
      '*Kimlik no 11 rakamdan oluşmalı'
    );
  });
  test('if telephone number field shows error when input value is not number', async () => {
    const telNumberField = screen.getByLabelText('Telefon');
    await act(async () => {
      fireEvent.change(telNumberField, { target: { value: 'aaa1' } });
    });
    expect(screen.getByTestId('test-stattext-ticketTelNumber')).toHaveTextContent(
      '*Telefon no sadece rakamlardan oluşmalı'
    );
  });

  test('if text area fields shows min length error', async () => {
    const addressField = screen.getByLabelText('Adres');
    const returnDetailField = screen.getByLabelText(
      'Yaşadığınız sorunun detayları (en az 20 karakter)'
    );

    await act(async () => {
      fireEvent.change(addressField, { target: { value: 'five word' } });
      fireEvent.change(returnDetailField, { target: { value: 'six word' } });
    });
    expect(screen.getByTestId('test-stattext-ticketAddress')).toHaveTextContent(
      '*En az 20 karakter'
    );
    expect(screen.getByTestId('test-stattext-ticketReasonDetail')).toHaveTextContent(
      '*En az 20 karakter'
    );
  });

  test('if shows valid message if input value is valid', async () => {
    const nameField = screen.getByLabelText('Adınız');
    const nameStatusText = screen.getByTestId('test-stattext-ticketFirstName');

    await act(async () => {
      fireEvent.change(nameField, { target: { value: 'My Name' } });
    });

    expect(nameStatusText).toHaveTextContent('Uygun');
  });

  test('if shows all error fields when button is clicked with empty form', async () => {
    const button = screen.getByRole('button');

    await act(async () => {
      fireEvent.click(button);
    });

    //There are 9 error/valid status messages
    const errorMessages = screen.getAllByRole('alert');
    expect(errorMessages).toHaveLength(9);
  });
});
