import { render, screen } from "@testing-library/react";
import { Separator } from "./Separator";

test("renders separator", () => {
  render(<Separator />);

  const el = screen.getByTestId("separator");

  expect(el).toBeInTheDocument();
});
