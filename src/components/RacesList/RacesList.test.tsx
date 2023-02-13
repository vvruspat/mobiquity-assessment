import { render, screen } from "@testing-library/react";
import { RacesList } from "./RacesList";

const props = {
  winner: {
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
  },
  winners: [
    {
      round: "1",
      date: "1979-10-17",
      raceTitle: "Spanish Grand Prix",
      country: "Spain",
      circuit: "Circuit de Barcelona-Catalunya",
      driver: "Charles Leclerc",
      points: 256,
      time: "12:34:34.765",
      speed: "256.65",
      team: "BMW",
      nationality: "Dutch",
    },
    {
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
    },
  ],
};

test("renders races list", () => {
  render(<RacesList {...props} />);

  const el = screen.getByTestId("races-list");
  expect(el).toMatchSnapshot();

  const cards = screen.getAllByTestId("card");
  expect(cards.length).toBe(2);
});
