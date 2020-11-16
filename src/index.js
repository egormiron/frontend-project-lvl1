import { showMessage, ask, logError } from './common/helpers.js';

import { getEvenGameData, evenGameRules } from './games/even-game.js';
import { getCalcGameData, calcGameRules } from './games/calc-game.js';
import { getGcdGameData, gcdGameRules } from './games/gcd-game.js';
import { getProgressionGameData, progressionGameRules } from './games/progression-game.js';
import { getPrimeGameData, primeGameRules } from './games/prime-game.js';

function runGame(getGameData, gameRules = '', maxRoundsAmount = 3) {
  return async () => {
    try {
      showMessage('Welcome to the Brain Games!');
      const name = await ask('May I have your name?');
      showMessage(`Hello, ${name}!`);
      showMessage(gameRules);

      let roundsFinished = 0;
      while (roundsFinished < maxRoundsAmount) {
        const { question, answer, validate } = await getGameData();

        showMessage(`Question: ${question}`);
        const userAnswer = await ask('Your answer: ');
        const isAnswerCorrect = validate(userAnswer);

        if (!isAnswerCorrect) {
          showMessage(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
          break;
        }

        showMessage('Correct!');
        roundsFinished += 1;
      }

      showMessage(roundsFinished === maxRoundsAmount ? `Congratulations, ${name}!` : `Let's try again, ${name}!`);
    } catch (e) {
      logError(e, 'Game was closed ;(');
    }
  };
}

export const startEvenGame = runGame(getEvenGameData, evenGameRules);
export const startCalcGame = runGame(getCalcGameData, calcGameRules);
export const startGcdGame = runGame(getGcdGameData, gcdGameRules);
export const startProgressionGame = runGame(getProgressionGameData, progressionGameRules);
export const startPrimeGame = runGame(getPrimeGameData, primeGameRules);
