const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr) /*|| !arr instanceof Array*/) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const discaredNext = '--discard-next';
  const discaredPrev = '--discard-prev';
  const doublePrev = '--double-prev';
  const doubleNext = '--double-next';
  let currentValue;
  
  const newArr = arr.map((item, i) => {
    if (arr[i +  1] === discaredPrev) {
      currentValue = item;
      return undefined;
    } else if (arr[i - 1] === discaredNext) {
      currentValue = undefined;
      return undefined;
    } else if (arr[i] === doublePrev && currentValue !== undefined) {
      currentValue = item;
      return arr[i - 1];
    } else if (arr[i] === doubleNext) {
      currentValue = item;
      return arr[i + 1];
    } else {
      currentValue = item;
      return item;
    }        
  })
  return newArr.filter(i => i !== undefined && i !== discaredPrev &&
     i !== discaredNext && i !== doubleNext && i !== doublePrev);
}

module.exports = {
  transform
};
