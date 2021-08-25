import React from 'react';
import { render, screen } from '@testing-library/react';

import Form from './Form';

describe('form element tests', () => {
  test('if renders form and elements', () => {
    render(<Form>YEAH</Form>);
    expect(screen.getByTestId('app-form-wrapper')).toBeInTheDocument();
  });
});
