import '@testing-library/jest-dom';

import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { shallow } from 'enzyme';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { AdminTicketContext } from 'contexts/AdminTicketsContext';
import AdminDashBoard from './AdminDashBoard';

const isLoading = false;
const ticketList = [
  { id: 'yeah', ticketFirsName: 'name1' },
  { id: 'yeah2', ticketFirstName: 'name2' },
];
const filteredList = { pending: [{ ticketFirsName: 'name1' }, { ticketFirstName: 'name2' }] };
const selectedStatus = 'pending';
const changeSelectedStatus = jest.fn();

const testHistory = createMemoryHistory();

describe('admin dashboard', () => {
  test('if renders admin dashboard container', () => {
    const wrapper = shallow(
      <Router history={testHistory}>
        <AdminTicketContext.Provider
          value={{ isLoading, ticketList, filteredList, selectedStatus, changeSelectedStatus }}
        >
          <AdminDashBoard />
        </AdminTicketContext.Provider>
      </Router>
    );
    expect(wrapper.find(AdminDashBoard)).toHaveLength(1);
  });

  test('if there are 4 stat filter buttons', () => {
    render(
      <Router history={testHistory}>
        <AdminTicketContext.Provider
          value={{ isLoading, ticketList, filteredList, selectedStatus, changeSelectedStatus }}
        >
          <AdminDashBoard />
        </AdminTicketContext.Provider>
      </Router>
    );

    expect(screen.getAllByTestId('test-stat-card')).toHaveLength(4);
  });

  test('if there are given 2 tickets on tickets list', () => {
    render(
      <Router history={testHistory}>
        <AdminTicketContext.Provider
          value={{ isLoading, ticketList, filteredList, selectedStatus, changeSelectedStatus }}
        >
          <AdminDashBoard />
        </AdminTicketContext.Provider>
      </Router>
    );

    expect(screen.getAllByTestId('test-ticketblock-button')).toHaveLength(2);
  });
});
