import { evenGame, evenGameRules } from './games/even-game.js';
import { showMessage, ask, logError } from './common/helpers.js';

function gameWrapper(gameFn, gameRules, maxRoundsAmount = 3) {
  return async () => {
    try {
      showMessage('Welcome to the Brain Games!');
      const name = await ask('May I have your name?');
      showMessage(`Hello, ${name}!`);
      showMessage(gameRules);

      let roundsFinished = 0;
      while (roundsFinished < maxRoundsAmount) {
        const { isAnswerCorrect } = await gameFn();

        if (!isAnswerCorrect) {
          break;
        }

        roundsFinished += 1;
      }

      showMessage(roundsFinished === maxRoundsAmount ? `Congratulations, ${name}!` : `Let's try again, ${name}!`);
    } catch (e) {
      logError(e, 'Game was closed ;(');
    }
  };
}

export const EvenGame = gameWrapper(evenGame, evenGameRules);

export default EvenGame;
