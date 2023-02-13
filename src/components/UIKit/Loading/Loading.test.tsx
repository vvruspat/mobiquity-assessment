import { render, screen } from "@testing-library/react";
import { Loading } from "./Loading";

test("renders loading", () => {
  render(<Loading />);

  const el = screen.getByTestId("loading");

  expect(el).toMatchSnapshot();
});
