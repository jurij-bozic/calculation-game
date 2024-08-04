import { TextField } from "@mui/material";
import { useEffect } from "react";
import { useDebounce } from "../custom_hooks/useDebounce";

export const SumToEnter: React.FunctionComponent<{ 
  sum: number | null,
  correctSum: boolean | null,
  setCorrectSum: (value: boolean | null) => void,
  sendToStore: () => void,
  enteredSum: number | null,
  setEnteredSum: (value: number | null) => void,
  hasError: boolean,
  setHasError: (value: boolean) => void,
  helperText: string,
  setHelperText: (value: string) => void,
  isDisabled: boolean,
  setIsDisabled: (value: boolean) => void,

}> = ({ sum, correctSum, setCorrectSum, sendToStore, enteredSum, setEnteredSum, hasError, setHasError, helperText, setHelperText, isDisabled, setIsDisabled  }) => {
  // debounce for entering multiple digits and better readable results
  const debouncedEnteredSum = useDebounce(enteredSum, 400);
  const debouncedCorrectSum = useDebounce(correctSum, 800);

  const validateInput = (value: number, sum: number) => {
    if (enteredSum !== sum) {
      setHasError(true);
      setHelperText('Incorrect sum.');
      setCorrectSum(false);
      console.log('Provided sum is INCORRECT.');
    }
    else {
      setHelperText('Correct sum.');
      setCorrectSum(true);
      console.log('Provided sum is CORRECT.')
    }
  };

  useEffect(() => {
    if (enteredSum !== null && sum !== null) {
      validateInput(enteredSum, sum);
    }
  }, [debouncedEnteredSum]);

  useEffect(() => {
    if (enteredSum !== null && correctSum !== null) {
      setIsDisabled(true);
      sendToStore();
    }
  }, [debouncedCorrectSum]);

  return (
    <div className='number-box'>
      <form>
        <TextField 
          id='filled-basic' 
          inputProps={{ "data-testid": "content-input" }}
          label='Enter sum' 
          variant='filled' 
          value={(enteredSum !== null ? enteredSum : '')}
          sx={{ 
            width: 110,
            marginLeft: '20px'
          }}
          error={hasError}
          helperText={helperText}
          color={(hasError ? "error" : ( correctSum ? "success" : "primary" ))}
          disabled={isDisabled}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            // disallow entering alphabetical inputs
            if ((!isNaN(parseInt(event.target.value)) || event.target.value == '') && !correctSum && !hasError) {
              setEnteredSum(parseInt(event.target.value))
            }
          }}
          />
        </form>
    </div>
  );
};