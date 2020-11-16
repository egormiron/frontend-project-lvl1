import { getRandomNumber } from '../common/helpers.js';

const operators = [
  {
    sign: '+',
    method: (a, b) => a + b,
  },
  {
    sign: '-',
    method: (a, b) => a - b,
  },
  {
    sign: '*',
    method: (a, b) => a * b,
  },
];

function getRandomMathOperator() {
  const randomKey = getRandomNumber(0, operators.length);

  return operators[randomKey];
}

export async function getCalcGameData() {
  const randomNumberA = getRandomNumber();
  const randomNumberB = getRandomNumber();
  const operator = getRandomMathOperator();
  const answer = operator.method(randomNumberA, randomNumberB);

  return {
    question: `${randomNumberA} ${operator.sign} ${randomNumberB}`,
    validate: (userAnswer) => answer === Number(userAnswer),
    answer,
  };
}

export const calcGameRules = 'What is the result of the expression?';
