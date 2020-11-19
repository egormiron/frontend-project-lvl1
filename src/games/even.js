import runGame from '../index.js';
import { getRandomNumber } from '../helpers.js';

function getEvenGameData() {
  const num = getRandomNumber();

  return {
    question: num.toString(),
    answer: num % 2 === 0 ? 'yes' : 'no',
  };
}

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export default runGame(getEvenGameData, gameDescription);
