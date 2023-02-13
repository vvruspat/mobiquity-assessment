import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

test("renders badge", () => {
  render(<Badge>Test badge</Badge>);

  const el = screen.getByTestId("badge");

  expect(el).toHaveClass("badge_s");
  expect(el).toHaveClass("badge_align_center");
  expect(el).toMatchSnapshot();
});

test('renders badge size "m"', () => {
  render(<Badge size="m">Test badge</Badge>);

  const el = screen.getByTestId("badge");

  expect(el).toHaveClass("badge_m");
  expect(el).toHaveClass("badge_align_center");
  expect(el).toMatchSnapshot();
});

test('renders badge size "l"', () => {
  render(<Badge size="l">Test badge</Badge>);

  const el = screen.getByTestId("badge");

  expect(el).toHaveClass("badge_l");
  expect(el).toHaveClass("badge_align_center");
  expect(el).toMatchSnapshot();
});

test("renders badge align", () => {
  render(<Badge align="center">Test badge</Badge>);

  const el = screen.getByTestId("badge");

  expect(el).toHaveClass("badge_s");
  expect(el).toHaveClass("badge_align_center");
  expect(el).toMatchSnapshot();
});

test("renders badge align left", () => {
  render(<Badge align="left">Test badge</Badge>);

  const el = screen.getByTestId("badge");

  expect(el).toHaveClass("badge_s");
  expect(el).toHaveClass("badge_align_left");
  expect(el).toMatchSnapshot();
});

test("renders badge align right", () => {
  render(<Badge align="right">Test badge</Badge>);

  const el = screen.getByTestId("badge");

  expect(el).toHaveClass("badge_s");
  expect(el).toHaveClass("badge_align_right");
  expect(el).toMatchSnapshot();
});

test("renders badge accent", () => {
  render(<Badge badgeStyle="accent">Test badge</Badge>);

  const el = screen.getByTestId("badge");

  expect(el).toHaveClass("badge_s");
  expect(el).toHaveClass("badge_align_center");
  expect(el).toHaveClass("badge_style_accent");
  expect(el).toMatchSnapshot();
});

test("renders badge info", () => {
  render(<Badge badgeStyle="info">Test badge</Badge>);

  const el = screen.getByTestId("badge");

  expect(el).toHaveClass("badge_s");
  expect(el).toHaveClass("badge_align_center");
  expect(el).toHaveClass("badge_style_info");
  expect(el).toMatchSnapshot();
});

test("renders badge primary", () => {
  render(<Badge badgeStyle="primary">Test badge</Badge>);

  const el = screen.getByTestId("badge");

  expect(el).toHaveClass("badge_s");
  expect(el).toHaveClass("badge_align_center");
  expect(el).toHaveClass("badge_style_primary");
  expect(el).toMatchSnapshot();
});

test("renders badge secondary", () => {
  render(<Badge badgeStyle="secondary">Test badge</Badge>);

  const el = screen.getByTestId("badge");

  expect(el).toHaveClass("badge_s");
  expect(el).toHaveClass("badge_align_center");
  expect(el).toHaveClass("badge_style_secondary");
  expect(el).toMatchSnapshot();
});
