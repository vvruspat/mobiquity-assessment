import { render, screen } from "@testing-library/react";
import { Error } from "./Error";

test("renders error", () => {
  render(<Error>Message</Error>);

  const el = screen.getByTestId("card");

  expect(el).toHaveClass("card_accent");
  expect(el).toHaveTextContent("Message");
  expect(el).toHaveTextContent("Error");
  expect(el).toMatchSnapshot();
});
