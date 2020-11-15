import promptly from 'promptly';

export function getRandomNumber(min = 0, max = 100) {
  return min + Math.round((max - min) * Math.random());
}

export async function ask(message) {
  return promptly.prompt(message);
}

export function showMessage(message) {
  console.log(message);
}

export function showRoundResultMessage(isCorrect, userAnswer, correctAnswer) {
  showMessage(isCorrect ? 'Correct!' : `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
}

export function logError(error, customMessage) {
  console.error(`\n${customMessage}`);
}
