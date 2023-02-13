import { render, screen } from "@testing-library/react";
import { InfoBadge } from "./InfoBadge";

test("renders info badge", () => {
  render(<InfoBadge title="Info badge title" content="Info badge content" />);

  const el = screen.getByTestId("badge");
  expect(el).toHaveTextContent("Info badge content");
  expect(el).toMatchSnapshot();

  const caption = screen.getByTestId("caption");
  expect(caption).toBeInTheDocument();
  expect(caption).toHaveTextContent("Info badge title");
});
