import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Loading from './Loading';

describe('loading component', () => {
  test('if shows loading text on loading condition', () => {
    render(
      <Loading isLoading>
        <p>You cant see me</p>
      </Loading>
    );
    expect(screen.queryByText(/You cant see me/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Yükleniyor/i)).toBeInTheDocument();
  });

  test('if renders given child on not loading condition', () => {
    render(
      <Loading isLoading={false}>
        <p>You should see me</p>
      </Loading>
    );
    expect(screen.queryByText(/You should see me/i)).toBeInTheDocument();
    expect(screen.queryByText(/Yükleniyor/i)).not.toBeInTheDocument();
  });
});
