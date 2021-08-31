import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import TestWrapper from 'components/test-wrapper/TestWrapper';
import PageWrapper from './PageWrapper';

describe('page wrapper component', () => {
  test('if renders given child elements/components', () => {
    render(
      <TestWrapper>
        <PageWrapper>
          <h1>Page element h1</h1>
        </PageWrapper>
      </TestWrapper>
    );

    expect(screen.getByText(/Page element h1/)).toBeInTheDocument();
  });
});
