import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

const onClick = jest.fn();

test("renders button", () => {
  render(<Button onClick={onClick}>Test button</Button>);

  const el = screen.getByTestId("button");

  fireEvent.click(el);
  expect(onClick).toHaveBeenCalledTimes(1);

  expect(el).toMatchSnapshot();
});

test("button click", () => {
  render(<Button>Test button</Button>);

  const el = screen.getByTestId("button");

  expect(el).toHaveClass("primary-button");
  expect(el).toMatchSnapshot();
});

test("renders button outline", () => {
  render(<Button mode="outline">Test outline button</Button>);

  const el = screen.getByTestId("button");

  expect(el).toHaveClass("outline-button");
  expect(el).toMatchSnapshot();
});

test("renders button icon", () => {
  render(<Button mode="icon">X</Button>);

  const el = screen.getByTestId("button");

  expect(el).toHaveClass("icon-button");
  expect(el).toMatchSnapshot();
});
