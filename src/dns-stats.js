const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  domains.forEach(element => {
    let str = '';
    let strArr = [];
    const strLen = element.split('.').length - 1;
    for (let i = strLen; i >= 0; i--) {
      str += `.${element.split('.')[i]}`;
      strArr.push(element.split('.')[i]);
      let res = 0;
      domains.forEach(element => {
        if (element.includes([...strArr].reverse().join('.'))) {
          res++;
        }
      })
      result[str] = res;
    }
  })
  return result;
}

module.exports = {
  getDNSStats
};
