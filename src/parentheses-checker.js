module.exports = function (str) {
  'use strict';
  var characters = str.split('');
  var bracketCount = 0;

  for (let character of characters ) {
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