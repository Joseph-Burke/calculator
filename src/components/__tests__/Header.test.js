import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';

describe('Header', () => {
  render(<Header />);
  it('contains a title', () => {
    const title = screen.getByText(/Math Magicians/i);
    expect(title).toBeInTheDocument();
  });
});
