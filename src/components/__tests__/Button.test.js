import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../Button';

const testProps = {
  name: 'test-button',
  processInput: buttonName => buttonName,
};

describe('Button', () => {
  const { name, processInput } = testProps;
  render(<Button name={name} processInput={processInput} />);

  it('renders a button with the correct text', () => {
    const button = screen.getByText('test-button');
    expect(button).toBeInTheDocument();
  });
});
