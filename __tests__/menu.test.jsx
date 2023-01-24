import { render, screen } from "@testing-library/react";
import Menu from "../components/menu";
import "@testing-library/jest-dom";

test("should render Menu component", () => {
  render(<Menu />);
  const menuElement = screen.getByTestId("menu-1");
  expect(menuElement).toBeInTheDocument();
  expect(menuElement).toHaveClass("fixed");
});
