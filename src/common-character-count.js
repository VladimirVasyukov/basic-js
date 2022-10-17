const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  let string1 = s1.split('');
  let string2 = s2.split('');
  string1.forEach(function (i) {
    if (string2.includes(i)) {
      string2.splice(string2.indexOf(i), 1);
      counter++;
    }

  });
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
