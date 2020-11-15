import { getRandomNumber } from '../common/helpers.js';

function gcd(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}

export async function gcdGame() {
  const randomNumberA = getRandomNumber();
  const randomNumberB = getRandomNumber();
  const answer = gcd(randomNumberA, randomNumberB);

  return {
    question: `${randomNumberA} ${randomNumberB}`,
    validate: (userAnswer) => answer === Number(userAnswer),
    answer,
  };
}

export const gcdGameRules = 'Find the greatest common divisor of given numbers.';
