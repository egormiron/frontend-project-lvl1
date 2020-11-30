import readlineSync from 'readline-sync';

function ask(message) {
  return readlineSync.question(message);
}

function showMessage(message) {
  console.log(message);
}

export default function runGame(getGameData, gameRules, maxRoundsAmount = 3) {
  return async () => {
    showMessage('Welcome to the Brain Games!!');
    const name = ask('May I have your name? ');
    showMessage(`Hello, ${name}!`);
    showMessage(gameRules);

    let counter = 0;
    while (counter < maxRoundsAmount) {
      const { question, answer } = getGameData();

      showMessage(`Question: ${question}`);
      const userAnswer = ask('Your answer: ');

      if (!(answer === userAnswer)) {
        showMessage(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
        showMessage(`Let's try again, ${name}!`);
        return;
      }

      showMessage('Correct!');
      counter += 1;
    }

    showMessage(`Congratulations, ${name}!`);
  };
}
