import { render, screen } from "@testing-library/react";
import { Caption } from "./Caption";

test("renders caption", () => {
  render(<Caption>Test caption</Caption>);

  const el = screen.getByTestId("caption");

  expect(el).toHaveClass("caption");
  expect(el).toHaveTextContent("Test caption");
  expect(el).toMatchSnapshot();
});
