import { render, screen } from "@testing-library/react";
import { WinnerCard } from "./WinnerCard";

const props = {
  year: "2022",
  driver: "Charles Leclerc",
  points: 256,
  team: "RED BULL",
  nationality: "Spanish",
};

test("renders race card", () => {
  render(<WinnerCard {...props} />);

  const el = screen.getByTestId("card");
  expect(el).toHaveTextContent(`Winner ${props.year}`);
  expect(el).toHaveTextContent("Charles Leclerc");
  expect(el).toHaveTextContent("RED BULL");

  expect(el).toMatchSnapshot();

  const flag = screen.getByTestId("flag");
  expect(flag).toBeInTheDocument();
  expect(flag).toHaveClass("fi-es");
});
