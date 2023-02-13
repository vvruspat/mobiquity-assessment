import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeButton } from "./ThemeButton";

test("renders theme button", () => {
  render(<ThemeButton />);

  const el = screen.getByTestId("button");

  fireEvent.click(el);
  expect(global.localStorage.getItem("theme")).toEqual("dark");
  fireEvent.click(el);
  expect(global.localStorage.getItem("theme")).toEqual("light");

  expect(el).toMatchSnapshot();
});
