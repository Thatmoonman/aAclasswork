/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***********************/

var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var range = tryRequire('../problems/1_range.js');
var reverseSentence = tryRequire(`../problems/2_reverse_sentence.js`);
var unique = tryRequire(`../problems/3_unique.js`);
var fizzBuzz = tryRequire(`../problems/4_fizz_buzz.js`);
var stringRange = tryRequire(`../problems/5_string_range.js`);

describe('range()', function () {
  it('should return array of numbers between "start" and "end"', function () {
    var result = range(1, 5);
    var expected = [1,2,3,4,5];

    assert.equal(result.length, expected.length);

    for(var i = 0; i < result.length; i += 1){
      assert.equal(result[i], expected[i]);
    }
  });

  it('should return empty array if "start" > "end"', function () {
    assert.equal(range(5, 1).length, 0);
  });
});

describe('reverseSentence()', function () {
  it('should return the input string with the words reversed', function () {
    var result = reverseSentence("I want to go to the store");
    var expected = "store the to go to want I";

    assert.equal(result, expected);
  });
});

describe('unique()', function () {
  it('should remove duplicate elements', function () {
    var result = unique([1 , 2, 3, "3", 2, 1, 13]);
    var expected = [1, 2, 3, "3", 13];

    assert.equal(result.length, expected.length);

    for(var i = 0; i < result.length; i += 1){
      assert.equal(result[i], expected[i]);
    }
  });
});

describe('fizzBuzz()', function () {
  it('should return array of all fizzbuzz numbers under max', function () {
    var result = fizzBuzz(20);
    var expected = [3, 5, 6, 9, 10, 12, 18];
    assert.equal(result.length, expected.length);

    for(var i = 0; i < result.length; i += 1){
      assert.equal(result[i], expected[i]);
    }
  });
});

describe('stringRange()', function () {
  it('should return a string containing all numbers from `min` to `max` at `step` intervals', function () {
    assert.equal(stringRange(0, 12, 2), '024681012');
    assert.equal(stringRange(3, 20, 5), '381318');
    assert.equal(stringRange(13, 33, 6), '13192531');
  });

  it('should return an empty string if there are no numbers in the range', function () {
    assert.equal(stringRange(100, 20, 2), '');
  });
});
