/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***********************/
var tryRequire  = require('../utils/try_require.js');
var assert      = require('assert');

var wordSandwich      = tryRequire('../problems/1_word_sandwich.js');
var reverseString     = tryRequire('../problems/2_reverse_string.js');
var negativeSum       = tryRequire('../problems/3_negative_sum.js');
var usernames         = tryRequire('../problems/4_usernames.js');
var isPowerOfTwo      = tryRequire('../problems/5_is_power_of_two.js');
var areCoprime        = tryRequire('../problems/6_are_coprime.js')
var shoppingCartCost  = tryRequire('../problems/7_shopping_cart_cost.js');
var pyramidScheme     = tryRequire('../problems/8_pyramid_scheme.js');

describe('Easy - wordSandwich()', function () {
  it('should return a sandwich consisting of the given strings', function () {
    assert.equal(wordSandwich('bread', 'cheese'), 'BREADcheeseBREAD');
    assert.equal(wordSandwich('BREAD', 'CHEESE'), 'BREADcheeseBREAD');
    assert.equal(wordSandwich('HeLLo', 'worLD'), 'HELLOworldHELLO');
    assert.equal(wordSandwich('GOODBYE', 'MOON'), 'GOODBYEmoonGOODBYE');
  });
});

describe('Easy - reverseString()', function () {
  it('should return the given string with its characters in reverse order', function () {
    assert.equal(reverseString('taco'), 'ocat');
    assert.equal(reverseString('hello world'), 'dlrow olleh');
    assert.equal(reverseString('goodbye moon'), 'noom eybdoog');
  });
});

describe('Easy - negativeSum()', function () {
  it('should return the sum of all negative numbers in the given array', function () {
    assert.equal(negativeSum([-3, 12, -5, -2, 3]), -10);
    assert.equal(negativeSum([2, 1, 7]), 0);
    assert.equal(negativeSum([-1, 3, -100]), -101);
  });
});

describe('Medium - usernames()', function () {
  it('should return an array of usernames based on the given names', function () {
    assert.deepEqual(
      usernames(['Oscar Alvarez','Danny Catalano','Kurstie Ozuna','Matt Haws']),['oalvarez','dcatalano','kozuna','mhaws']);
    assert.deepEqual(usernames(['Alex Bronca']), [ 'abronca' ]);
  });
});

describe('Medium - isPowerOfTwo()', function () {
  it('should return a boolean indicating whether a the given number is a power of two', function () {
    assert.equal(isPowerOfTwo(1), true);
    assert.equal(isPowerOfTwo(32), true);
    assert.equal(isPowerOfTwo(12), false);
    assert.equal(isPowerOfTwo(33), false);
    assert.equal(isPowerOfTwo(-8), false);
    assert.equal(isPowerOfTwo(256), true);
  });
});

describe('Medium - areCoprime()', function () {
  it('should return a boolean indicating whether or not two numbers are coprime', function () {
    assert.equal(areCoprime(16, 25), true);
    assert.equal(areCoprime(15, 14), true);
    assert.equal(areCoprime(14, 21), false);
    assert.equal(areCoprime(15, 6), false);
    assert.equal(areCoprime(15, 5), false);
    assert.equal(areCoprime(5, 15), false);
  });
});

describe('Medium - shoppingCartCost()', function () {
  it('should return the total cost of items in the cart', function () {
    var prices1 = {bread: 4, butter: 6, milk: 3, eggs: 7, celery: 1};
    var prices2 = {milk: 1, celery: 1, eggs: 1};
    var cart1 = {bread : 2, milk: 1, eggs : 1};
    var cart2 = {milk: 2, celery: 5};

    assert.equal(shoppingCartCost(cart1, prices1), 18);
    assert.equal(shoppingCartCost(cart2, prices1), 11);
    assert.equal(shoppingCartCost(cart2, prices2), 7);
  });
});

describe('Hard - pyramidScheme()', function () {
  it('should return a 2D array representing the pyramid formed with the given base', function () {
    var expected1 = [
      [ 85 ],
      [ 37, 48 ],
      [ 15, 22, 26 ],
      [ 5, 10, 12, 14 ],
      [ 2, 3, 7, 5, 9 ]
    ];
    assert.deepEqual(pyramidScheme([2, 3, 7, 5, 9]), expected1);

    var expected2 = [
      [ 16 ],
      [ 8, 8 ],
      [ 4, 4, 4 ],
      [ 2, 2, 2, 2 ]
    ]
    assert.deepEqual(pyramidScheme([2, 2, 2, 2]), expected2);

    var expected3 = [
      [ 17 ],
      [ 2, 15 ],
      [ -5, 7, 8 ]
    ]
    assert.deepEqual(pyramidScheme([-5, 7, 8]), expected3);
  });
});
