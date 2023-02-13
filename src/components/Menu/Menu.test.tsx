import { render, screen } from "@testing-library/react";
import { Menu } from "./Menu";

test("renders menu", () => {
  render(
    <Menu
      options={[
        { key: "1", value: "1 text" },
        { key: "2", value: "2 text" },
      ]}
    />
  );

  const el = screen.getByTestId("menu");
  expect(el).toMatchSnapshot();

  const buttons = screen.getAllByTestId("button");
  expect(buttons.length).toEqual(2);
  expect(buttons[0]).toHaveTextContent("1 text");
  expect(buttons[1]).toHaveTextContent("2 text");
});
