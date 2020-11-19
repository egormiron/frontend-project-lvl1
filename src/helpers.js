// eslint-disable-next-line import/prefer-default-export
export function getRandomNumber(min = 0, max = 100) {
  return min + Math.floor((max - min) * Math.random());
}
