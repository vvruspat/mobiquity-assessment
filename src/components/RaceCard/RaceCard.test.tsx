import { render, screen } from "@testing-library/react";
import { RaceCard } from "./RaceCard";

const props = {
  round: "2",
  date: "1979-10-17",
  raceTitle: "Spanish Grand Prix",
  country: "Spain",
  circuit: "Circuit de Barcelona-Catalunya",
  driver: "Charles Leclerc",
  points: 256,
  time: "12:34:34.765",
  speed: "256.65",
  team: "RED BULL",
  nationality: "Spanish",
};

test("renders race card", () => {
  render(<RaceCard isAccent {...props} />);

  const el = screen.getByTestId("card");
  expect(el).toHaveTextContent(
    new Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
    }).format(new Date(props.date))
  );
  expect(el).toHaveTextContent("Spanish Grand Prix");
  expect(el).toHaveTextContent("Circuit de Barcelona-Catalunya");
  expect(el).toHaveTextContent("Charles Leclerc");
  expect(el).toHaveTextContent("RED BULL");
  expect(el).toHaveTextContent("256.65");
  expect(el).toHaveTextContent("12:34:34.765");
  expect(el).toHaveTextContent("256");

  expect(el).toMatchSnapshot();

  const flag = screen.getByTestId("flag");
  expect(flag).toBeInTheDocument();
  expect(flag).toHaveClass("fi-es");
});
