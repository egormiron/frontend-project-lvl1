import runGame from '../index.js';
import { getRandomNumber } from '../helpers.js';

function gcd(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}

function getGcdGameData() {
  const a = getRandomNumber();
  const b = getRandomNumber();

  return {
    question: `${a} ${b}`,
    answer: gcd(a, b).toString(),
  };
}

const gameDescription = 'Find the greatest common divisor of given numbers.';

export default runGame(getGcdGameData, gameDescription);
