import { getRandomNumber } from '../common/helpers.js';

function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
}

export function getPrimeGameData() {
  const randomNumber = getRandomNumber();
  const answer = isPrime(randomNumber) ? 'yes' : 'no';

  return {
    question: `${randomNumber}`,
    validate: (userAnswer) => answer === userAnswer.toLowerCase(),
    answer,
  };
}

export const primeGameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
