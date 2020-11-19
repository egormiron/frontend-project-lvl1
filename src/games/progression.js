import runGame from '../index.js';
import { getRandomNumber } from '../helpers.js';

function getProgression(minLength = 5, maxLength = 10) {
  const progressionLength = getRandomNumber(minLength, maxLength + 1);
  const step = getRandomNumber();
  const start = getRandomNumber();
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
}

function getProgressionGameData() {
  const progression = getProgression();
  const key = getRandomNumber(0, progression.length);

  return {
    question: progression.map((item, index) => (index !== key ? item : '..')).join(' '),
    answer: progression[key].toString(),
  };
}

const gameDescription = 'What number is missing in the progression?';

export default runGame(getProgressionGameData, gameDescription);
