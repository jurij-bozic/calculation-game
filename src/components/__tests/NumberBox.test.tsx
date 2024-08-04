import { render, screen } from "@testing-library/react";
import { NumberBox } from "..//NumberBox";

test("renders a box with appropriate styling", () => {
    render(<NumberBox numberToSum={2} boxSize={100} isCorrect={true} />);
    const numberBoxElement = screen.getByRole('number-display');
    expect(numberBoxElement.classList).toContain('number-box');
    expect(numberBoxElement).toHaveStyle("width: 100px;");
    expect(numberBoxElement).toHaveStyle("height: 100px;");
})