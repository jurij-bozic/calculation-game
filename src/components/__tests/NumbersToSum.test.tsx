import { render, screen } from "@testing-library/react";
import { NumbersToSum } from "../NumbersToSum";

test("renders a container with appropriate styling and algebraic operators", () => {
    render(<NumbersToSum firstNumToSum={1} secondNumToSum={2} boxSize={100} />);
    const numToSumElement = screen.getByRole('numToSum-display');
    expect(numToSumElement.classList).toContain('numToSum-container');
    expect(numToSumElement).toHaveTextContent('+');
    expect(numToSumElement).toHaveTextContent('=');
})