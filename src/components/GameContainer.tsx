import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import React, { useEffect } from 'react';
import { NumbersToSum } from './NumbersToSum';
import { SumToEnter } from './SumToEnter';
import Grid from '@mui/material/Grid';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { PerformedCalculation, addCalculation, calculationSelector } from '../redux/reducer';
import { PreviousCalculations } from './PreviousCalculations';
import { useDebounce } from '../custom_hooks/useDebounce';
import { useCalculationStates } from '../custom_hooks/useCalculationStates';
import { useCalculationLogic } from '../custom_hooks/useCalculationLogic';

export const GameContainer: React.FunctionComponent<{}> = ({}) => {
  // calculation states
  const {
    firstNumToSum, setFirstNumToSum,
    secondNumToSum, setSecondNumToSum,
    sum, setSum,
    enteredSum, setEnteredSum,
    correctSum, setCorrectSum,
    hasError, setHasError,
    helperText, setHelperText,
    isDisabled, setIsDisabled
  } = useCalculationStates();
  const { generateRandomInt, sumNumbers } = useCalculationLogic();
  // redux for previous calculations
  const previousCalculations = useAppSelector(calculationSelector);
  const dispatch = useAppDispatch();
  // debounce for disabling input during state transition
  const debouncedEnteredSum = useDebounce(enteredSum, 400);

  const setGeneratedNumbers = () => {
    setFirstNumToSum(generateRandomInt());
    setSecondNumToSum(generateRandomInt());
  };
  
  const sendToStore = () => {
    let calculation: PerformedCalculation;

    if (firstNumToSum !== null && secondNumToSum !== null && enteredSum !== null && correctSum !== null) {
      calculation = {
        firstNumToSum: firstNumToSum,
        secondNumToSum: secondNumToSum,
        enteredSum: enteredSum,
        isCorrectSum: correctSum
      };
    }
    else {
      calculation = {
        firstNumToSum: 0,
        secondNumToSum: 0,
        enteredSum: 0,
        isCorrectSum: true
      };
    }

    dispatch(addCalculation(calculation));
  };

  const resetCurrentNumValues = () => {
    console.log('Reseting game values . . .');
    setGeneratedNumbers();
    setEnteredSum(null);
    setHasError(false);
    setHelperText('');
    setCorrectSum(null);
  }

  useEffect(() => {
    if (enteredSum == null) {
      setIsDisabled(false);
    }
  }, [debouncedEnteredSum]);

  useEffect(() => {
    if (firstNumToSum !== null && secondNumToSum !== null) {
      setSum(sumNumbers(firstNumToSum, secondNumToSum));
    }
  }, [firstNumToSum, secondNumToSum]);  

  useEffect(() => {
    console.log('Redux store had been updated:')
    console.log(previousCalculations)
    resetCurrentNumValues();
  }, [previousCalculations]);

  return (
    <Grid 
      container 
      direction="column"
      justifyContent="center"
      alignItems="center"
      >
      <Card 
        sx={{ 
          minWidth: 500, 
          maxWidth: 800, 
          justifyContent: 'center',
        marginBottom: 5 }}
        >
        <CardContent className='game-container'>
          <NumbersToSum firstNumToSum={firstNumToSum}  secondNumToSum={secondNumToSum} boxSize={100}/>
          <SumToEnter 
            sum={sum} 
            correctSum={correctSum} 
            setCorrectSum={setCorrectSum} 
            sendToStore={sendToStore}
            enteredSum={enteredSum} 
            setEnteredSum={setEnteredSum}
            hasError={hasError}
            setHasError={setHasError}
            helperText={helperText}
            setHelperText={setHelperText}
            isDisabled={isDisabled}
            setIsDisabled={setIsDisabled}
            />
        </CardContent>
      </Card>
      <PreviousCalculations />
    </Grid>
  )
};