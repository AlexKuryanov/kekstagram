const getRandomNum = (min, max) => {
  min = Math.abs(min);
  max = Math.abs(max);
  if (min >= max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

console.log(getRandomNum(5, -1));

const checkLength = (string, maxLength) => {
  return string.length <= maxLength;
};

let str =
  'Lorem ipsum dolor';
console.log(checkLength(str, 15));
