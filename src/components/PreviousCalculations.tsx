import { PerformedCalculation, calculationSelector } from "../redux/reducer";
import { useAppSelector } from "../redux/hooks";
import { NumbersToSum } from "./NumbersToSum";
import { NumberBox } from "./NumberBox";

export const PreviousCalculations: React.FunctionComponent<{}> = ({}) => {
  const previousCalculations = useAppSelector(calculationSelector);
  
  return (
    <div data-test="previous-calculations">
      { previousCalculations.map((calculation: PerformedCalculation, index: number) => (
          <div className='history-container' key={index}>
            <NumbersToSum firstNumToSum={calculation.firstNumToSum}  secondNumToSum={calculation.secondNumToSum} boxSize={50}/>
            <NumberBox numberToSum={calculation.enteredSum} boxSize={50} isCorrect={calculation.isCorrectSum}/>
          </div>
      ))
      }
    </div>
  );
};