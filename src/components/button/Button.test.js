import '@testing-library/jest-dom';

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Button from './Button';

describe('button component tests', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    render(<Button buttonText="Test Button" onClickFunction={handleClick} buttonStyle="black" />);
  });

  test('loads button component ', () => {
    expect(screen.getByTestId('app-btn')).toBeInTheDocument();
    expect(screen.getByTestId('app-btn')).toHaveTextContent('Test Button');
  });

  test('Calls onClickFunction when clicked', () => {
    fireEvent.click(screen.getByTestId('app-btn'));
    expect(handleClick).toHaveBeenCalled();
  });

  test('button has given class', () => {
    expect(screen.getByTestId('app-btn')).toHaveClass('btn--black');
  });
});
