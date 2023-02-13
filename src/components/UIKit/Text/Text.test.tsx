import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

test("renders text", () => {
  render(<Text>Test text</Text>);

  const el = screen.getByTestId("text");

  expect(el).toHaveClass("text");
  expect(el).toHaveClass("size_m");
  expect(el).toHaveClass("regular");
  expect(el).toHaveTextContent("Test text");
  expect(el).toMatchSnapshot();
});

test("renders text size s", () => {
  render(<Text size="s">Test text</Text>);

  const el = screen.getByTestId("text");

  expect(el).toHaveClass("text");
  expect(el).toHaveClass("size_s");
  expect(el).toHaveClass("regular");
  expect(el).toHaveTextContent("Test text");
  expect(el).toMatchSnapshot();
});

test("renders text size l", () => {
  render(<Text size="l">Test text</Text>);

  const el = screen.getByTestId("text");

  expect(el).toHaveClass("text");
  expect(el).toHaveClass("size_l");
  expect(el).toHaveClass("regular");
  expect(el).toHaveTextContent("Test text");
  expect(el).toMatchSnapshot();
});

test("renders text size xl", () => {
  render(<Text size="xl">Test text</Text>);

  const el = screen.getByTestId("text");

  expect(el).toHaveClass("text");
  expect(el).toHaveClass("size_xl");
  expect(el).toHaveClass("regular");
  expect(el).toHaveTextContent("Test text");
  expect(el).toMatchSnapshot();
});

test("renders text size xxl", () => {
  render(<Text size="xxl">Test text</Text>);

  const el = screen.getByTestId("text");

  expect(el).toHaveClass("text");
  expect(el).toHaveClass("size_xxl");
  expect(el).toHaveClass("regular");
  expect(el).toHaveTextContent("Test text");
  expect(el).toMatchSnapshot();
});

test("renders text bold", () => {
  render(<Text weight="bold">Test text</Text>);

  const el = screen.getByTestId("text");

  expect(el).toHaveClass("text");
  expect(el).toHaveClass("size_m");
  expect(el).toHaveClass("bold");
  expect(el).toHaveTextContent("Test text");
  expect(el).toMatchSnapshot();
});

test("renders text semibold", () => {
  render(<Text weight="semibold">Test text</Text>);

  const el = screen.getByTestId("text");

  expect(el).toHaveClass("text");
  expect(el).toHaveClass("size_m");
  expect(el).toHaveClass("semibold");
  expect(el).toHaveTextContent("Test text");
  expect(el).toMatchSnapshot();
});
