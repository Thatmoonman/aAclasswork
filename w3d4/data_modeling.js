// ~~~~~~ 1
let students1 = [
    { name : "Anthony" },
    { name : "Winnie" },
    { name : "Pawandeep" }
  ];
  
  // Write a function that will print the name of all the students
  // Example:
  //
  // printNames(students1)
  // Anthony
  // Winnie
  // Pawandeep
  
  function printNames(students) {
    
    for (let i = 0; i < students.length; i++) {
        for (let key in students[i]) {
            console.log(students[i][key])
        }
    }
  }
  
  // printNames(students1); // uncomment when ready to test
  
  // ~~~~~~ 2
  var students2 = [
    {
      name : "Anthony",
      id : 0
    },
    {
      name : "Winnie",
      id : 1
    },
    {
      name : "Pawandeep",
      id : 2
    }
  ];
  
  // Write a function that will print the name and id of all the students
  // Example:
  //
  // printStudents(students2)
  // Anthony is student #0
  // Winnie is student #1
  // Pawandeep is student #2
  
  function printStudents(students) {
    for (let i = 0; i < students.length; i++) {
        console.log(students[i]["name"] + " is student #" + students[i]["id"]);
    }
  }
  
//   printStudents(students2); // uncomment when ready to test
  
  //~~~~~3
  var students3 = [
    {
      name : "Anthony",
      id : 0,
      grades : [{ id : 0, score : 84},{ id : 1, score : 20},{ id : 2, score : 80}]
    },
    {
      name : "Winnie",
      id : 1,
      grades : [{ id : 0, score : 62},{ id : 1, score : 56},{ id : 2, score : 100}]
    },
    {
      name : "Pawandeep",
      id : 2,
      grades : [{ id : 0, score : 79},{ id : 1, score : 92},{ id : 2, score : 49}]
    }
  ];
  
  // Write a function that will print the name of the student and their highest test score
  // Example:
  //
  // printBestGrade(students3)
  // Anthony 84
  // Winnie 100
  // Pawandeep 92
  
  function printBestGrade(students) {
    for (let i = 0; i < students.length; i++) {
        let topScore = 0
        let student = students[i]["name"]
        let grade = students[i]["grades"]
        
        for (let j = 0; j < grade.length; j++) {
            let test = grade[j]["score"]

            if (test > topScore) {
                topScore = test
            }
        }
        console.log(student + " " + topScore)
    }
  }
  
//   printBestGrade(students3); // uncomment when ready to test
  
  
  // Write a function that will print the name of the student and their average test score
  //
  // Example
  //
  // printAverageGrade(students3)
  // Anthony 61.333333333333336
  // Winnie 72.66666666666667
  // Pawandeep 73.33333333333333
  
  function printAverageGrade(students) {
    for (let i = 0; i < students.length; i++) {
        let student = students[i]["name"]
        let grade = students[i]["grades"]
        let total = 0
        
        for (let j = 0; j < grade.length; j++) {
            total += grade[j]["score"]
        }
        console.log(student + " " + total/grade.length)
    }
  }
  
//   printAverageGrade(students3); // uncomment when ready to test

/*
For this exercise, you will create complex objects that are meant to be
parsed by specified functions.
*/

//~~~~~~1
// Create the data object that this function is expecting
//
// Example
//
// printUsers(users1)
// 0: UserName1
// 1: UserName2
// ...and so forth, for all the users

let users1 = [
    {id: 0, username: "Justin"},
    {id: 1, username: "Jimmy"},
    {id: 2, username: "Wei"},
    {id: 3, username: "Jonathon"}
]

function printUsers(users) {
    for (let i = 0; i < users.length; i++) {
      let user = users[i];
      console.log(user.id + ": " + user.username);
    }
  }
  
//   printUsers(users1); // uncomment when ready to test
  
  
  //~~~~~~2
  // Create the data object that this function is expecting
  //
  // Example
  //
  // printUsersWebsites(users2)
  // ~~UserName1~~
  //   -siteName1
  //   -siteName2
  // ~~UserName2~~
  //   -siteName3
  //   -siteName4
  //   -siteName5
  // ...and so forth, for all the users
  
  let users2 = [
    {username: "wandasykes", sites: [{url: "thebomb.com"}, {url: "google"}]},
    {username: "bigboi", sites: [{url: "askjeeves"}, {url: "facebook"}, {url: "reddit"}]}
  ]
  
  function printUsersWebsites (users) {
    for (let i = 0; i < users.length; i++) {
      let user = users[i];
      console.log("~~" + user.username + "~~");
  
      for (let j = 0; j < user.sites.length; j++) {
        let site = user.sites[j];
        console.log("  -" + site.url);
      }
    }
  }
  
//   printUsersWebsites(users2); // uncomment when ready to test
  
  
  //~~~~~~3
  // Create the data object that this function is expecting
  //
  // Example
  //
  // printUsersWebsitesInfo(users3)
  // ~~UserName1~~
  //   -siteName1.com
  //     -load: 21%
  //     -# of users: 210000
  //     -popularity score: 32
  //   -siteName2.com
  //     -load: 21%
  //     -# of users: 210000
  //     -popularity score: 32
  // ~~UserName2~~
  //   -siteName3.com
  //     -load: 21%
  //     -# of users: 210000
  //     -popularity score: 32
  //   -siteName4.com
  //     -load: 21%
  //     -# of users: 210000
  //     -popularity score: 32
  //   -siteName5.com
  //     -load: 21%
  //     -# of users: 210000
  //     -popularity score: 32
  // ...and so forth, for all the users
  
  var users3 = [
    {username: "bestDAD12451", sites: [
        {url: "google", load: 45, userCount: 10000000000, pop: 100},
        {url: "facebook", load: 5, userCount: 2, pop: 2}
    ]},
    {username: "blop", sites: [
        {url: "hotmutantsingles", load: 98, userCount: 25, pop: 50}
    ]}
  ]
  
  function printUsersWebsitesInfo (users) {
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      console.log("~~" + user.username + "~~");
  
      for (var j = 0; j < user.sites.length; j++) {
        var site = user.sites[j];
        console.log("  -" + site.url);
        console.log("    -load: " + site.load + "%");
        console.log("    -# of users: " + site.userCount);
        console.log("    -popularity score: " + site.pop);
      }
    }
  }
  
  printUsersWebsitesInfo(users3); // uncomment when ready to test