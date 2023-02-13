import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

test("renders card", () => {
  render(<Card>Test card</Card>);

  const el = screen.getByTestId("card");

  expect(el).toHaveTextContent("Test card");
  expect(el).toMatchSnapshot();
});

test("renders card accent", () => {
  render(<Card isAccent>Test card</Card>);

  const el = screen.getByTestId("card");

  expect(el).toHaveClass("card_accent");
  expect(el).toMatchSnapshot();
});

test("renders card header", () => {
  render(<Card header="Title">Test card</Card>);

  const el = screen.getByTestId("card");

  expect(el).toHaveTextContent("Title");
  expect(el).toHaveTextContent("Test card");
  expect(el).toMatchSnapshot();
});
