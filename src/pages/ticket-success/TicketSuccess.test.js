import '@testing-library/jest-dom';

import React from 'react';
import { render, screen } from '@testing-library/react';
import SuccessContent from './components/SuccessContent';

const mockData = { ticketStatus: 'Bekliyor', ticketFirstName: 'name1' };

describe('ticket success page', () => {
  test('if renders success page with data', () => {
    render(<SuccessContent data={mockData} />);
    expect(screen.getByTestId('test-success-content')).toBeInTheDocument();
    expect(screen.getByText(/name1/)).toBeInTheDocument();
  });
});
