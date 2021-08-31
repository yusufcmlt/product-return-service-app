import '@testing-library/jest-dom';

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import StatCard from './StatCard';

const mockFunc = jest.fn();

describe('status card tests', () => {
  let statCardComponent;

  beforeEach(() => {
    render(<StatCard title="statTitle" detail="35" color="green" onClick={mockFunc} />);
    statCardComponent = screen.getByRole('button');
  });

  test('if stat card has given color class ', () => {
    expect(statCardComponent).toHaveClass('stat-card--green');
  });

  test('if status card has given title and quantity detail', () => {
    expect(statCardComponent).toHaveTextContent(/statTitle/);
    expect(statCardComponent).toHaveTextContent(/35/);
  });

  test('if status card works as a button', () => {
    fireEvent.click(statCardComponent);
    expect(mockFunc).toHaveBeenCalled();
  });
});
