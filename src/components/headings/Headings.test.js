import '@testing-library/jest-dom';

import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import TitleHeading from './TitleHeading';
import SubHeading from './SubHeading';

describe('navbar tests', () => {
  afterEach(cleanup);
  test('if renders text for title heading', () => {
    render(<TitleHeading>TitleHeading</TitleHeading>);
    expect(screen.getByTestId('app-heading-title')).toHaveTextContent(/^TitleHeading$/);
  });
  test('if renders text for sub heading', () => {
    render(<SubHeading>SubHeading</SubHeading>);
    expect(screen.getByTestId('app-heading-subtitle')).toHaveTextContent(/^SubHeading$/);
  });
});
