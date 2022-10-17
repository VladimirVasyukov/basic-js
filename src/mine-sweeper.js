const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let mine = {};
  let result = [];

  for (let i in matrix) {
    result.push([]);
    for (let j in matrix[i]) {
      mine[i + j] = 0;
      result[i].push([]);
    }
  }

  for (let i in matrix) {
    for (let j in matrix[i]) {
      if (matrix[i][j] === true) {
        mine[(Number(i)-1).toString() + (Number(j)-1).toString()]++;
        mine[(Number(i)-1).toString() + j]++;
        mine[(Number(i)-1).toString() + (Number(j)+1).toString()]++;

        mine[Number(i).toString() + (Number(j)-1).toString()]++;
        mine[i + (Number(j)+1).toString()]++;

        mine[(Number(i)+1).toString() + (Number(j)-1).toString()]++;
        mine[(Number(i)+1).toString() + j]++;
        mine[(Number(i)+1).toString() + (Number(j)+1).toString()]++;
      }
    }
  }

  for (let i in matrix) {
    for (let j in matrix[i]) {
      result[i][j] = mine[i+j];
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
