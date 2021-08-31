import '@testing-library/jest-dom';

import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';

import TestWrapper from 'components/test-wrapper/TestWrapper';
import Admin from './Admin';
import LoginForm from './components/LoginForm';

describe('login page tests', () => {
  test('if admin page is not present when isAdmin is true', () => {
    render(
      <TestWrapper authValues={{ isAdmin: true }}>
        <Admin />
      </TestWrapper>
    );
    expect(screen.queryByTestId('test-admin-page')).not.toBeInTheDocument();
  });

  test('if shows error on login form using wrong credentials', async () => {
    const wrapper = shallow(
      <LoginForm
        onSubmit={() => {
          wrapper.setProps({ isErrorShown: true });
        }}
        isErrorShown={false}
      />
    );

    const userNameField = wrapper.find('#adminUserName');
    const passwordField = wrapper.find('#adminPassword');
    const buttonSubmit = wrapper.find('.btn');

    userNameField.simulate('change', { target: { value: 'arandomuser' } });
    passwordField.simulate('change', { target: { value: 'arandomPassword' } });

    buttonSubmit.simulate('click');

    const statusText = wrapper.find({ 'data-testid': 'test-stattext-adminUserName' });
    expect(statusText).toHaveStyle('visibility:visible');
  });
});
