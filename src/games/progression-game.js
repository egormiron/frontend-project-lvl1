import { getRandomNumber } from '../common/helpers.js';

const minBorder = 5;
const maxBorder = 11;

function getProgression() {
  const progressionLength = getRandomNumber(minBorder, maxBorder);
  const step = getRandomNumber();
  const progression = [getRandomNumber()];

  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(progression[i - 1] + step);
  }

  return progression;
}

export function getProgressionGameData() {
  const progression = getProgression();
  const key = getRandomNumber(0, progression.length);
  const answer = progression[key];
  const question = progression.map((item, index) => (index !== key ? item : '..')).join(' ');

  return {
    question,
    validate: (userAnswer) => answer === Number(userAnswer),
    answer,
  };
}

export const progressionGameRules = 'What number is missing in the progression?';
