import { render, screen } from "@testing-library/react";
import { Title } from "./Title";

test("renders title", () => {
  render(<Title>Test title</Title>);

  const el = screen.getByTestId("title");

  expect(el).toHaveClass("title");
  expect(el).toHaveTextContent("Test title");
  expect(el).toMatchSnapshot();
});
