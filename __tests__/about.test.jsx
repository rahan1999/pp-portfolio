import { render, screen } from "@testing-library/react";
import About from "../components/about";
import "@testing-library/jest-dom";

test("should render About component", () => {
  render(<About />);
  const aboutElement = screen.getByTestId("about-1");
  expect(aboutElement).toBeInTheDocument();
});
