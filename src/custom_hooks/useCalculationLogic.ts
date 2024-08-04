export const useCalculationLogic = () => {
  const generateRandomInt = () => {
    return Math.floor(Math.random() * 10);
  }

  const sumNumbers = (num1: number, num2: number) => {
    return num1 + num2;
  };

  return {
    sumNumbers,
    generateRandomInt,
  };
};