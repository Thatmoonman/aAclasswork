var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var numberPrimes = tryRequire('../problems/1_number_primes.js');
var longestBigram = tryRequire('../problems/2_longest_bigram.js');
var longestLetterStreak = tryRequire('../problems/3_longest_letter_streak.js');
var previousPrimeArray = tryRequire('../problems/4_previous_prime_array.js');


describe('numberPrimes()', function () {
  it('should return the number of primes less than or equal to `n`', function () {
    assert.equal(numberPrimes(10), 4);
    assert.equal(numberPrimes(12), 5);
    assert.equal(numberPrimes(20), 8);
    assert.equal(numberPrimes(1), 0);
    assert.equal(numberPrimes(100), 25);
    assert.equal(numberPrimes(104), 27);
  });
});

describe('longestBigram()', function () {
  it('should return the longest bigram of the sentence', function () {
    assert.equal(longestBigram('measure twice cut once'), 'measure twice');
    assert.equal(longestBigram("One must have a mind of winter"), 'must have');
    assert.equal(longestBigram("this last assessment is fun"), 'last assessment');
    assert.equal(longestBigram("say goodbye bootcamp prep"), 'goodbye bootcamp');
    assert.equal(longestBigram("go home to eat"), 'go home');
  });
});

describe('longestLetterStreak()', function () {
  it('should return the length of the longest streak of letters of `searchLetters` in the `str`', function () {
    assert.equal(longestLetterStreak("ACCA", ["C"]), 2);
    assert.equal(longestLetterStreak("YACCADCA", ["C", "A"]), 4);
    assert.equal(longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"]), 3);
    assert.equal(longestLetterStreak("YYYYY", ["Z", "K", "Y"]), 5);
    assert.equal(longestLetterStreak("YYYBYY", ['B']), 1);
  });
});

describe('previousPrimeArray()', function () {
  it('should return a new array where each prime is replaced with the prime that comes before it', function () {
    assert.deepStrictEqual(previousPrimeArray([10, 12, 11, 7, 16]), [ 10, 12, 7, 5, 16 ]);
    assert.deepStrictEqual(previousPrimeArray([17, 24, 29, 5, 2, 4]), [ 13, 24, 23, 3, null, 4 ]);
    assert.deepStrictEqual(previousPrimeArray([1, 2, 3, 4, 5]), [ 1, null, 2, 4, 3 ]);
  });
});
