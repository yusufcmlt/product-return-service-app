import '@testing-library/jest-dom';

import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import Button from './Button';

const handleClick = jest.fn();

describe('button component tests', () => {
  beforeEach(() => {
    render(<Button buttonText="TestButton" onClickFunction={handleClick} buttonStyle="black" />);
  });

  test('if button component renders ', () => {
    expect(screen.getByTestId('app-btn')).toBeInTheDocument();
  });

  test('if button calls onClickFunction when clicked', () => {
    fireEvent.click(screen.getByTestId('app-btn'));
    expect(handleClick).toHaveBeenCalled();
  });

  test('if button is not clickable when isDisable prop is true', () => {
    cleanup();
    render(<Button isDisabled onClickFunction={handleClick} />);
    fireEvent.click(screen.getByTestId('app-btn'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('if button has given class', () => {
    expect(screen.getByTestId('app-btn')).toHaveClass('btn--black');
  });
  test('if button has given text', () => {
    expect(screen.getByTestId('app-btn')).toHaveTextContent(/TestButton/);
  });
});
