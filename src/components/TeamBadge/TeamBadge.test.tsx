import { render, screen } from "@testing-library/react";
import { TeamBadge } from "./TeamBadge";

test("renders team badge", () => {
  render(<TeamBadge team={"Red bull"} />);

  const el = screen.getByTestId("badge");
  expect(el).toHaveTextContent("Red bull");
  expect(el).toMatchSnapshot();
});
