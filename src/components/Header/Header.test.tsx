import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

test("renders header", () => {
  render(<Header />);

  const el = screen.getByTestId("header");
  expect(el).toMatchSnapshot();

  const menu = screen.getByTestId("menu");
  expect(menu).toBeInTheDocument();
});
