import {
  ask, getRandomNumber, showMessage, showRoundResultMessage,
} from '../common/helpers.js';

function getRandomMathOperator() {
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
  const randomKey = getRandomNumber(0, operators.length);

  return operators[randomKey];
}

export const calcGameRules = 'What is the result of the expression?';

export async function calcGame() {
  const randomNumberA = getRandomNumber();
  const randomNumberB = getRandomNumber();
  const operator = getRandomMathOperator();

  showMessage(`Question: ${randomNumberA} ${operator.sign} ${randomNumberB}`);
  const userAnswer = await ask('Your answer: ');
  const correctAnswer = operator.method(randomNumberA, randomNumberB);

  const isAnswerCorrect = correctAnswer === Number(userAnswer);
  showRoundResultMessage(isAnswerCorrect, userAnswer, correctAnswer);

  return { isAnswerCorrect };
}
