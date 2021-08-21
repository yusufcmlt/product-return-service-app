import '@testing-library/jest-dom';

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Button from './Button';

const handleClick = jest.fn();

describe('button component tests', () => {
  beforeEach(() => {
    render(<Button buttonText="Test Button" onClickFunction={handleClick} buttonStyle="black" />);
  });

  test('if button component renders ', () => {
    expect(screen.getByTestId('app-btn')).toBeInTheDocument();
    expect(screen.getByTestId('app-btn')).toHaveTextContent('Test Button');
  });

  test('if button calls onClickFunction when clicked', () => {
    fireEvent.click(screen.getByTestId('app-btn'));
    expect(handleClick).toHaveBeenCalled();
  });

  test('if button has given class', () => {
    expect(screen.getByTestId('app-btn')).toHaveClass('btn--black');
  });
});
