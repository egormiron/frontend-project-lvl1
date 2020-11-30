import runGame from '../index.js';
import { getRandomNumber } from '../helpers.js';

function getProgression(start, step, progressionLength) {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
}

function getProgressionGameData() {
  const start = getRandomNumber();
  const step = getRandomNumber();
  const progressionLength = getRandomNumber(5, 11);
  const progression = getProgression(start, step, progressionLength);
  const key = getRandomNumber(0, progression.length);

  return {
    question: progression.map((item, index) => (index !== key ? item : '..')).join(' '),
    answer: progression[key].toString(),
  };
}

const gameDescription = 'What number is missing in the progression?';

export default runGame(getProgressionGameData, gameDescription);
