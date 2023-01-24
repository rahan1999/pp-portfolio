import { render, screen } from "@testing-library/react";
import Translator from "../components/translator";
import "@testing-library/jest-dom";

test("should render Menu component", () => {
  render(<Translator />);
  const translatorElement = screen.getByTestId("translator-1");
  expect(translatorElement).toBeInTheDocument();
});
