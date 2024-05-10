"use strict"

  //to sort strings you can just use sort() to get them in alphabetical order a-z

//to sort numbers properly you need a compareFunction, the easiest one use is
//a - b gets you ASCENDING 1-99 b-a gets you DESC 99-1
// function compareFnShortened(a, b) {
//     return a - b
// }

//The full compare function below can be used for numbers and strings
// and is really useful if you need to sort string in alpha order DESC z-a

//this one is good for a-z
// function compareFn(a, b) {
//     if (a < b) {
//       return -1;
//     } else if (b > a) {
//       return 1;
//     }
//     // a must be equal to b
//     return 0;
//   }
// this one is good for z-a
// function compareFn(a, b) {
//     if (a > b) {
//       return -1;
//     } else if (b < a) {
//       return 1;
//     }
//     // a must be equal to b
//     return 0;
//   }

//if you want to sort a list of objects based on some property in the object you 
//can modify the compare function to include the property name
// in this case we are using the studentID property
// function compareFnForObjectProperties(a, b) {
//     if (a.studentID < b.studentID) {
//       return -1;
//     } else if (b.studentID > a.studentID) {
//       return 1;
//     }
//     // a must be equal to b
//     return 0;
//   }


let listOfnames = ["Eric", "Alec", "Italy", "Antonio", "Wilfredo"];

//console.log() the list of names before we sort
console.log(listOfnames)

//sort the list of names
listOfnames.sort(compareFn);

//console.log() the list of names after we sort
console.log(listOfnames)


// let listOfNumbers = [1, 31, 115, 111, 3, 2, 7];

// console.log(listOfNumbers);

// listOfNumbers.sort(compareFnShortened);

// console.log(listOfNumbers)


//full compare function that will work with strings and numbers
function compareFn(a, b) {
    if (a > b) {
      return -1;
    } else if (b < a) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  //shortened function for sorting numbers
  function compareFnShortened(a, b) {
    return a - b
  }


  let students = [
    {
        studentID: 123,
        firstName: "Eric"
    },
    {
        studentID: 321,
        firstName: "Bob"
    },
    {
        studentID: 111,
        firstName: "Alan"
    },
  ]

  console.log(students)

  students.sort(compareFnForObjectProperties);

  console.log(students)

  //compare function for sorting list of objects based on an object property
  function compareFnForObjectProperties(a, b) {
    if (a.studentID < b.studentID) {
      return -1;
    } else if (b.studentID > a.studentID) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }