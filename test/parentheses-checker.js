var assert = require('chai').assert;
var checker;

describe('Given a parentheses checker', function () {
  beforeEach(function () {
    checker = require('../src/parentheses-checker');
  });

  it('Should return true when checking an empty string', function () {
    assert.equal(true, checker(''));
  });

  it('Should return true when checking an argument of "{}"', function () {
    assert.equal(true, checker('{}'));
  });

  it('Should return true when checking an argument of "{{}}"', function () {
    assert.equal(true, checker('{{}}'));
  });

  it('Should return true when checking an argument of "{aa{bb}cc}"', function () {
    assert.equal(true, checker('{aa{bb}cc}'));
  });

  it('Should return false when checking an argument of "{{}"', function () {
    assert.equal(false, checker('{{}'));
  });

  it('Should return false when checking an argument of "}}{{"', function () {
    assert.equal(false, checker('}}{{'));
  });


  it('Should return true when checking an argument of "abc"', function () {
    assert.equal(true, checker('abc'));
  });
});