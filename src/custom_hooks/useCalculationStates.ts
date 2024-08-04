import { useState } from "react";

export const useCalculationStates = () => {
  const [firstNumToSum, setFirstNumToSum] = useState<number | null>(null);
  const [secondNumToSum, setSecondNumToSum] = useState<number | null>(null);
  const [sum, setSum] = useState<number | null>(null);
  const [enteredSum, setEnteredSum] = useState<number | null>(null);
  const [correctSum, setCorrectSum] = useState<boolean | null>(null)
  const [hasError, setHasError] = useState<boolean>(false);
  const [helperText, setHelperText] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  return {
    firstNumToSum, setFirstNumToSum,
    secondNumToSum, setSecondNumToSum,
    sum, setSum,
    enteredSum, setEnteredSum,
    correctSum, setCorrectSum,
    hasError, setHasError,
    helperText, setHelperText,
    isDisabled, setIsDisabled
  };
};