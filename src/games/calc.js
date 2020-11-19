import runGame from '../index.js';
import { getRandomNumber } from '../helpers.js';

const operations = [
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
  const randomKey = getRandomNumber(0, operations.length);

  return operations[randomKey];
}

function getCalcGameData() {
  const a = getRandomNumber();
  const b = getRandomNumber();
  const operation = getRandomMathOperator();

  return {
    question: `${a} ${operation.sign} ${b}`,
    answer: operation.method(a, b).toString(),
  };
}

const gameDescription = 'What is the result of the expression?';

export default runGame(getCalcGameData, gameDescription);
