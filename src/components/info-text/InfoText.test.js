import '@testing-library/jest-dom';

import React from 'react';
import { render, screen } from '@testing-library/react';
import InfoText from './InfoText';

describe('Info text tests', () => {
  let infoComponent;
  beforeEach(() => {
    render(<InfoText data-testid="test-info-text" title="testTitle" detail="testDetail" />);
    infoComponent = screen.getByTestId('test-info-text');
  });

  test('if text info component has given title as text content', () => {
    expect(infoComponent).toHaveTextContent(/testTitle/);
  });
  test('if text info component has given detail text as text content', () => {
    expect(infoComponent).toHaveTextContent(/testDetail/);
  });
});
