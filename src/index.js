import readlineSync from 'readline-sync';

function ask(message) {
  return readlineSync.question(message);
}

function showMessage(message) {
  console.log(message);
}

export default function runGame(getGameData, gameRules = '', maxRoundsAmount = 3) {
  return async () => {
    showMessage('Welcome to the Brain Games!!');
    const name = ask('May I have your name? ');
    showMessage(`Hello, ${name}!`);
    showMessage(gameRules);

    let roundsFinished = 0;
    while (roundsFinished < maxRoundsAmount) {
      const { question, answer } = getGameData();

      showMessage(`Question: ${question}`);
      const userAnswer = ask('Your answer: ');
      const isAnswerCorrect = answer === userAnswer;

      if (!isAnswerCorrect) {
        showMessage(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
        break;
      }

      showMessage('Correct!');
      roundsFinished += 1;
    }

    showMessage(roundsFinished === maxRoundsAmount ? `Congratulations, ${name}!` : `Let's try again, ${name}!`);
  };
}
