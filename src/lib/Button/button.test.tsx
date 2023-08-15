import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'
import Button from "./button";

describe("Running Test for Button", () => {

  test("Check Button Disabled", () => {
    render(<Button text="Button name" disabled/>)
    expect(screen.getByRole('button',{name:"Button name"})).toBeDisabled();
  });
});