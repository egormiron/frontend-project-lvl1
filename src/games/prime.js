import runGame from '../index.js';
import { getRandomNumber } from '../helpers.js';

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function getPrimeGameData() {
  const num = getRandomNumber();
  const answer = isPrime(num) ? 'yes' : 'no';

  return {
    question: num.toString(),
    answer,
  };
}

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default runGame(getPrimeGameData, gameDescription);
