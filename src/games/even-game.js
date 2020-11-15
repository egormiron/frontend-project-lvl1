import { getRandomNumber } from '../common/helpers.js';

export function evenGame() {
  const randomNumber = getRandomNumber();
  const answer = randomNumber % 2 === 0 ? 'yes' : 'no';

  return {
    question: `${randomNumber}`,
    validate: (userAnswer) => answer === userAnswer.toLowerCase(),
    answer,
  };
}

export const evenGameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
