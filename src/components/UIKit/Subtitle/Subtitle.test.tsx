import { render, screen } from "@testing-library/react";
import { Subtitle } from "./Subtitle";

test("renders subtitle", () => {
  render(<Subtitle>Test subtitle</Subtitle>);

  const el = screen.getByTestId("subtitle");

  expect(el).toHaveClass("subtitle");
  expect(el).toHaveTextContent("Test subtitle");
  expect(el).toMatchSnapshot();
});
