var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var myMap = tryRequire('../problems/1_my_map.js');
var isPalindrome = tryRequire('../problems/2_is_palindrome.js');
var passingStudents = tryRequire('../problems/3_passing_students.js');
var laligatArray = tryRequire('../problems/4_laligat_array.js');
var disemvowel = tryRequire('../problems/5_disemvowel.js');


describe('myMap()', function () {
  it('should return an array containing the results of `cb` when passed the element, index, and array at each position', function () {
    assert.deepEqual(myMap([9, 25, 100, 36, 81], Math.sqrt), [ 3, 5, 10, 6, 9 ]);

    function multiply(num1, num2) {
      return num1 * num2;
    }
    assert.deepEqual(myMap([2, 4, 6, 6], multiply), [ 0, 4, 12, 18 ]);
  });
});

describe('isPalindrome()', function () {
  it('should return true if the characters of the sentence form a palindrome, false otherwise.', function () {
    assert.equal(isPalindrome('rats live on no evil star'), true);
    assert.equal(isPalindrome('stella won no wallets'), true);
    assert.equal(isPalindrome('racecar'), true);
    assert.equal(isPalindrome('hello world'), false);
    assert.equal(isPalindrome('too hot to hoot'), true);
    assert.equal(isPalindrome('tacocxt'), false);
  });
});

describe('passingStudents()', function () {
  it('should return an array containing the names of passing students', function () {
    var students1 = [
      {
        "name": "Kush",
        "id": 12345,
        "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
      },
      {
        "name": "Ned",
        "id": 55555,
        "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
      },
      {
        "name": "Haseeb",
        "id": 94110,
        "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
      }
    ];

    var result1 = passingStudents(students1);
    assert.deepEqual(result1, [ 'Kush', 'Ned' ]);

    var students2 = [
      {
        name: 'Matt',
        grades: [{id: 0, score: 60}, {id: 2, score: 100}]
      },
      {
        name: 'Laura',
        grades: [{id: 0, score: 50}]
      }
    ];

    var result2 = passingStudents(students2);
    assert.deepEqual(result2, [ 'Matt' ]);

    var students3 = [
      {
        name: 'Tom',
        grades: [{id: 0, score: 70}, {id: 2, score: 70}]
      },
      {
        name: 'Garfield',
        grades: [{id: 0, score: 50}]
      }
    ];

    var result3 = passingStudents(students3);
    assert.deepEqual(result3, [ 'Tom' ]);
  });
});

describe('laligatArray()', function () {
  it('should return an array containing the laligat sum of each number', function () {
    var expected1 = [17, 28, 77, 41];
    var result1 = laligatArray([10, 11, 20, 15]);
    assert.deepEqual(expected1, result1);

    var expected2 = [ 0, 2, 5, 5, 10 ];
    var result2 = laligatArray([1, 2, 3, 4, 5]);
    assert.deepEqual(expected2, result2);
  });
});

describe('disemvowel()', function () {
  it('should return the string with all vowels removed', function () {
    assert.equal(disemvowel('bootcamp'), 'btcmp');
    assert.equal(disemvowel('PREP'), 'PRP');
    assert.equal(disemvowel('hello world'), 'hll wrld');
    assert.equal(disemvowel('pizza PARTY'), 'pzz PRTY');
  });
});
