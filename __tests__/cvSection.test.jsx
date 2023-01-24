import { render, screen } from "@testing-library/react";
import Cvsection from "../components/cvSection";
import "@testing-library/jest-dom";

test("should render Cvsection component", () => {
  render(
    <Cvsection
      main="test"
      titles="testTitle1-testTitle2"
      descriptions="testDesc1-testDesc2"
    />,
  );

  const cvsectionElement = screen.getByTestId("cvsection-1");
  expect(cvsectionElement).toBeInTheDocument();
  expect(cvsectionElement).toHaveTextContent("testTitle2");
  expect(cvsectionElement).toHaveTextContent("testDesc1");
});
