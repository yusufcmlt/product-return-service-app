import '@testing-library/jest-dom';

import React from 'react';
import { render, screen } from '@testing-library/react';

import TicketResponseContent from './components/TicketResponseContent';

const mockData = { ticketStatus: 'Bekliyor', ticketFirstName: 'name1' };

describe('ticket response component', () => {
  beforeEach(() => {
    render(<TicketResponseContent data={mockData} />);
  });

  test('if renders response content', () => {
    expect(screen.getByTestId('test-ticket-response-content')).toBeInTheDocument();
  });

  test('if response heading renders and have given status text', () => {
    expect(screen.getByTestId('test-ticket-response-heading')).toBeInTheDocument();
    expect(screen.getByTestId('test-ticket-response-heading')).toHaveTextContent('Bekliyor');
  });

  test('if response content have a detail card with given data', () => {
    expect(screen.getByTestId('test-ticket-detail-card')).toBeInTheDocument();
    expect(screen.getByText(/name1/)).toBeInTheDocument();
  });
});
