var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var arrayBuilder = tryRequire('../problems/1_array_builder.js')
var longestWord = tryRequire('../problems/2_longest_word.js');
var leastCommonMultiple = tryRequire('../problems/3_least_common_multiple.js');
var sillyCipher = tryRequire('../problems/4_silly_cipher.js');
var hipsterfy = tryRequire('../problems/5_hipsterfy.js');


describe('arrayBuilder()', function () {
  it('should return an array containing the appropriate number of elements based on the values of the object.', function () {
    var result1 = arrayBuilder({'cats': 2, 'dogs': 1});
    var answer1 = ['cats', 'cats', 'dogs'];
    assert.deepStrictEqual(result1.sort(), answer1.sort());

    var result2 = arrayBuilder({a: 3, b: 1, c:1, d: 4});
    var answer2 = ['a', 'a', 'a', 'b', 'c', 'd', 'd', 'd', 'd'];
    assert.deepStrictEqual(result2.sort(), answer2.sort());
  });
});


describe('longestWord()', function () {
  it('should return the longest word in the sentence', function () {
    assert.equal(longestWord('app academy is cool'), 'academy');
    assert.equal(longestWord('hate having hungry hippos'), 'hippos');
    assert.equal(longestWord('bootcamp'), 'bootcamp');
  });

  it('should return an empty string if the sentence is empty', function () {
    assert.equal(longestWord(''), '');
  });
});


describe('leastCommonMultiple()', function () {
  it('should return the lowest number which is a multiple of both inputs', function () {
    var result1 = leastCommonMultiple(2,3);
    var result2 = leastCommonMultiple(6,10);
    var result3 = leastCommonMultiple(24,26);

    assert.equal(result1, 6);
    assert.equal(result2, 30);
    assert.equal(result3, 312);
  });
});


describe('sillyCipher()', function () {
  it('should return a string where characters are replaced with their corresponding value in the cipher', function () {
    var result = sillyCipher("apple" , { a : "c", p : "x", l : "r", e : "o"});
    var expected = 'cxxro';
    assert.equal(result, expected);
  });

  it('should return a string where characters not in the cipher are replaced with a dot .', function () {
    var result1 = sillyCipher("apple", { a : "c", p : "x"});
    var expected1 = 'cxx..';
    assert.equal(result1, expected1);

    var result2 = sillyCipher("bootcamp prep?", { o : "e", p : "q" , "?" : "!"});
    var expected2 = '.ee....q.q..q!'
    assert.equal(result2, expected2);

    var result3 = sillyCipher("abc", {});
    var expected3 = '...';
    assert.equal(result3, expected3);
  });
});


describe('hipsterfy()', function () {
  it('should remove the last vowel from each word.', function () {
    var result = hipsterfy("proper tonic panther");
    var expected = "propr tonc panthr";
    assert.equal(result, expected);

    var result = hipsterfy("towel flicker banana");
    var expected = "towl flickr banan";
    assert.equal(result, expected);

    var result = hipsterfy("turtle cheeseburger fries");
    var expected = "turtl cheeseburgr fris";
    assert.equal(result, expected);

    var result = hipsterfy("embrace thy end");
    var expected = "embrac thy nd";
    assert.equal(result, expected);
  });
});
