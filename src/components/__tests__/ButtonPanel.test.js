import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonPanel from "../ButtonPanel";

const handleInput = buttonName => {
  try {
    setData(calculate(data, buttonName));
  } catch (error) {
    setData({
      total: data.total,
      next: error.message,
      operation: data.operation
    });
  }
};

const testData = {
  total: null,
  next: null,
  operation: null
};

const buttonNames = [
  "AC",
  "+/-",
  "%",
  "÷",
  "7",
  "8",
  "9",
  "X",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "="
];

describe("Button Panel", () => {
  render(<ButtonPanel data={testData} inputHandler={handleInput} />);
  const buttonPanel = screen.getByTestId("button-panel");

  it("renders a button panel", () => {
    expect(buttonPanel).toBeInTheDocument();
  });
});
