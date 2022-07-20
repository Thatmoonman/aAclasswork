/*******************************************************************************
Write a function bestWinStreak that takes in a string of W's (wins) and L's (losses).
The function should return a number representing the longest consecutive streak
of wins. You may assume the only characters in the string are 'W' and 'L'.

Examples:

bestWinStreak('WWLWWWLWW') => 3
bestWinStreak('WWLLWWWWW') => 5
bestWinStreak('WWWW') => 4
bestWinStreak('LLL') => 0
*******************************************************************************/

function bestWinStreak(str) {
  let streak = 0

  for (let i = 0; i < str.length - 1; i++) {
    let test = 1

    for (let j = i + 1; j < str.length; j++) {
      test++

      if (str[j] === "L") {
        break;
      } else if (str[i] === str[j] && test > streak) {
        streak = test
      }

    }
  }
  return streak;

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = bestWinStreak;
