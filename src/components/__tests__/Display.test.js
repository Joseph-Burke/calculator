import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Display from '../Display';

describe('Display', () => {
  render(<Display />);
  test('the display appears', () => {
    const display = screen.getByTestId('display');
    expect(display).toBeInTheDocument();
  });
});
