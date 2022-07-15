/*******************************************************************************
Write a function highestScore(students) that takes in an array of student objects
as a parameter. It should return a string that corresponds to the student with
the highest score. The string should contain that student's initials
concatenated with their id. Assume the array contains at least 1 student object and
the student with the highest score is unique (there are no ties).
Example:

var students = [
 {name: 'Alvin Zablan', id: 128, score: -42},
 {name: 'Eliot Bradshaw', id: 32, score: 57},
 {name: 'Tommy Duek', id: 2, score: 99},
 {name: 'Fred Sladkey', id: 256, score: 94}
];

highestScore(students); //=> 'TD2'
*******************************************************************************/

function highestScore(students) {
  let name
  let id
  let highScore = 0

  for (let i = 0; i < students.length; i++) {
    if (students[i]["score"] > highScore) {
      highScore = students[i]["score"]
      name = students[i]["name"]
      id = students[i]["id"]
    }
  }
  let highName = name.split(" ")

  return highName[0][0] + highName[1][0] + id

}
//O(n)
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = highestScore;
