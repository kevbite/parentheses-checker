module.exports = function (str) {
  'use strict';
  var bracketCount = 0;

  for (let character of str) {
    if (character === '{') {
      bracketCount++;
    }
    if (character === '}') {
      if (bracketCount === 0) {
        return false;
      }
      bracketCount--;
    }
  }

  return bracketCount === 0;
};