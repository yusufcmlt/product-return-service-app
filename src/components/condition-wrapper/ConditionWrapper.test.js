import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ConditionWrapper from './ConditionWrapper';

describe('condition wrapper component', () => {
  test('if conditionally renders given component ', () => {
    render(
      <ConditionWrapper
        condition={false}
        componentTrue={<p>TRUE</p>}
        componentFalse={<p>FALSE</p>}
      />
    );
    expect(screen.queryByText(/FALSE/i)).toBeInTheDocument();
    expect(screen.queryByText(/TRUE/i)).not.toBeInTheDocument();
  });
});
