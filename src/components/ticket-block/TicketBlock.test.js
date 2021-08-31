import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TicketBlock from './TicketBlock';

const mockClick = jest.fn();
const mockData = {
  id: 'id',
  ticketFirstName: 'first name',
  ticketLastName: 'last name',
  ticketReason: 'reason',
  ticketStatus: 'status',
};

describe('ticket block component', () => {
  let ticketBlockComponent;
  let ticketBlockSpanArray;
  beforeEach(() => {
    render(<TicketBlock ticketData={mockData} onClick={mockClick} />);
    ticketBlockComponent = screen.getByRole('button');
    ticketBlockSpanArray = screen.getAllByTestId('test-ticketblock-span');
  });

  test('if renders given 4 elements inside', () => {
    // Object has 5 elements but component concats name and last name
    expect(Object.keys(mockData)).toHaveLength(5);
    expect(ticketBlockSpanArray).toHaveLength(4);
  });
});
