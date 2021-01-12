import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../Home';

describe('rendered Home', () => {
  render(<Home />);
  test('has Text element', () => {
    const title = screen.getByText(/Welcome to our page!/i);
    const firstParagraph = screen.getByText(/Mathematics includes/i);
    const secondParagraph = screen.getByText(/Rigorous arguments/i);
    expect(title).toBeInTheDocument();
    expect(firstParagraph).toBeInTheDocument();
    expect(secondParagraph).toBeInTheDocument();
  });
});
