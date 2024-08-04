import { render, screen, fireEvent } from "@testing-library/react";
import { SumToEnter } from "../SumToEnter";

test("renders an input where a value change triggers state changes", () => {
    const enteredSum = null;
    const setEnteredSum = jest.fn();

    render(<SumToEnter 
        sum={3}
        correctSum={null} 
        setCorrectSum={jest.fn()}
        sendToStore={() => null}
        enteredSum={enteredSum}
        setEnteredSum={setEnteredSum}
        hasError={false}
        setHasError={jest.fn()}
        helperText={''}
        setHelperText={jest.fn()}
        isDisabled={false}
        setIsDisabled={jest.fn()}
        />);

    const inputElement = screen.getByTestId("content-input");
    fireEvent.change(inputElement, { target: { value: 3 }})
    expect(setEnteredSum).toHaveBeenCalled();
})