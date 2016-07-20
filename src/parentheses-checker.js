module.exports = function (str) {
  'use strict';
  var split = str.split('');
  var bracketCount = 0;

  for (let c of split) {
    if (c === '{') {
      bracketCount++;
    }
    if (c === '}') {
      if (bracketCount === 0) {
        return false;
      }
      bracketCount--;
    }
  }

  return bracketCount === 0;
};