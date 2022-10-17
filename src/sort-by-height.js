const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let height = [];
  for (let element in arr) {
    if (arr[element] !== -1) {
      height.push(arr[element]);
    }
  }

  height.sort((a, b) => {
    return a - b;
  })

  for (let element in arr) {
    if (arr[element] !== -1) {
      arr[element] = height.shift();
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
