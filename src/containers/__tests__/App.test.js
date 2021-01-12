import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('rendered App', () => {
  render(<App />);

  test('has Text element', () => {
    const element = screen.getByText(/Let's do some maths!/i);
    expect(element).toBeInTheDocument();
  });
});
