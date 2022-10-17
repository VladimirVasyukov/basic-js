const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arrayStr = [];

  for (let element in Array.from(str)) {
    arrayStr.push([1, Array.from(str)[element]]);
  }

  let resultArray = [];

  if (arrayStr.length > 0) resultArray.push(arrayStr[0]);

  while (arrayStr.length > 1) {
    if (arrayStr[1][1] === resultArray[resultArray.length - 1][1]) {
     resultArray[resultArray.length - 1][0] += 1;
    } else {
      resultArray.push(arrayStr[1]);
    }
    arrayStr.shift();
  }

  let result = '';

  for (let el in resultArray) {
    if (resultArray[el][0] > 1) {
      result += resultArray[el][0] + resultArray[el][1];
    } else {
      result += resultArray[el][1]
    }

  }
  return result;
}

module.exports = {
  encodeLine
};
