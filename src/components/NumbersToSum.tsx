import { NumberBox } from "./NumberBox";
import { AlgebraOperator } from "./AlgebraOperator";

export const NumbersToSum: React.FunctionComponent<{
  firstNumToSum: number | null, 
  secondNumToSum: number | null,
  boxSize: number
}> = ({ firstNumToSum, secondNumToSum, boxSize}) => {

  return (
    <div className="numToSum-container" role="numToSum-display">
      <NumberBox numberToSum={(firstNumToSum ? firstNumToSum : 0)} boxSize={boxSize} />
      <AlgebraOperator operator={'+'} />
      <NumberBox numberToSum={(secondNumToSum ? secondNumToSum : 0)} boxSize={boxSize} />
      <AlgebraOperator operator={'='} />
    </div>
  );
};