import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Quote from "../Quote";

describe("rendered Quote", () => {
  render(<Quote />);
  test("the expected quote is visible on the screen", () => {
    const quote = screen.getByText(/William Paul Thurston/i);
    expect(quote).toBeInTheDocument();
  });
});
