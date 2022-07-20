/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***********************/

var tryRequire = require('../try_require.js');
var assert = require('assert');

var reverseRange = tryRequire('../problems/1_reverse_range.js');
var isPrime = tryRequire('../problems/2_is_prime.js');
var magicNumbers = tryRequire('../problems/3_magic_numbers.js');
var firstAndLast = tryRequire('../problems/4_first_and_last.js');
var royalWe = tryRequire('../problems/5_royal_we.js');


describe('reverseRange()', function () {
  it('should return an array of numbers between "start" and "end" in reverse order', function () {
    var result = reverseRange(1, 5);
    var expected = [4, 3, 2];

    assert.deepEqual(result, expected);
  });

  it('should return an empty array if "start" > "end"', function () {
    assert.equal(reverseRange(5, 1).length, 0);
  });
});


describe('isPrime', function () {
  it('should return a boolean indicating whether a number is prime', function () {
    assert.equal(isPrime(2), true);
    assert.equal(isPrime(11), true);
    assert.equal(isPrime(15), false);
    assert.equal(isPrime(64), false);
  });

  it('should return false for numbers less than 2', function () {
    assert.equal(isPrime(1), false);
    assert.equal(isPrime(0), false);
    assert.equal(isPrime(-2), false);
    assert.equal(isPrime(-10), false);
  });

});


describe('magicNumbers()', function () {
  it('should return array of all fizzbuzz numbers under max', function () {
    var result = magicNumbers(20);
    var expected = [4, 6, 8, 16, 18];
    assert.deepEqual(result, expected);
  });
});


describe('firstAndLast()', function () {
  it('should return the sum or difference between the first and last elements depending on the number of elements in the array', function () {
    assert.equal(firstAndLast([1, 2, 3, 4]), 5);
    assert.equal(firstAndLast([1, 2, 3, 4, 5]), -4);
    assert.equal(firstAndLast([12, 5]), 17);
    assert.equal(firstAndLast([12]), 0);
    assert.equal(firstAndLast([7, 11, 3]), 4);
    assert.equal(firstAndLast([5, 10, 15]), -10);
  });
});


describe('royalWe()', function () {
  it('should replace "I" with "we"', function () {
    var result = royalWe("I want to go to the store");
    var expected = "we want to go to the store";
    assert.equal(result, expected);
  });

  it('should replace "my" with "our"', function () {
    var result = royalWe("Jump for my love");
    var expected = "Jump for our love";
    assert.equal(result, expected);
  });

  it('should replace "me" with "us"', function () {
    var result = royalWe("This is my house and you will respect me");
    var expected = "This is our house and you will respect us";
    assert.equal(result, expected);
  });

  it('should replace "mine" with "ours"', function () {
    var result = royalWe("This is mine");
    var expected = "This is ours";
    assert.equal(result, expected);
  });
});
