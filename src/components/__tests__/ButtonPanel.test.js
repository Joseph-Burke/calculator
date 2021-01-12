import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonPanel from '../ButtonPanel';

const handleInput = buttonName => buttonName;

const testData = {
  total: null,
  next: null,
  operation: null,
};

describe('Button Panel', () => {
  render(<ButtonPanel data={testData} inputHandler={handleInput} />);
  const buttonPanel = screen.getByTestId('button-panel');

  it('renders a button panel', () => {
    expect(buttonPanel).toBeInTheDocument();
  });
});
