import { render, screen } from "@testing-library/react";
import { Flag } from "./Flag";

test("renders flag by nationality", () => {
  render(<Flag nationality="Dutch" />);

  const el = screen.getByTestId("flag");

  expect(el).toHaveClass("fi-nl");
  expect(el).toMatchSnapshot();
});

test("renders flag by country", () => {
  render(<Flag country="Netherlands" />);

  const el = screen.getByTestId("flag");

  expect(el).toHaveClass("fi-nl");
  expect(el).toMatchSnapshot();
});
