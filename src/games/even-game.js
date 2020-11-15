import {
  ask, getRandomNumber, showMessage, showRoundResultMessage,
} from '../common/helpers.js';

export const evenGameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

export async function evenGame() {
  const randomNumber = getRandomNumber();
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

  showMessage(`Question: ${randomNumber}`);
  const userAnswer = await ask('Your answer: ');

  const isAnswerCorrect = correctAnswer === userAnswer.toLowerCase();
  showRoundResultMessage(isAnswerCorrect, userAnswer, correctAnswer);

  return { isAnswerCorrect };
}
