import { render, screen } from "@testing-library/react";
import { PointsBadge } from "./PointsBadge";

test("renders points badge", () => {
  render(<PointsBadge points={256} />);

  const el = screen.getByTestId("badge");
  expect(el).toHaveTextContent("Points");
  expect(el).toHaveTextContent("256");
  expect(el).toMatchSnapshot();

  const caption = screen.getByTestId("caption");
  expect(caption).toBeInTheDocument();
  expect(caption).toHaveTextContent("Points");
});
