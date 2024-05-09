"use strict"

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scoresArray) {

    let total = 0;

    let lenthOfList = scoresArray.length

    for (let i = 0; i < scoresArray.length; i++) {
        total += scoresArray[i];
    }

    return total / scoresArray.length;
}

// Display the average of the myScores array
console.log(getAverage(myScores));
// Display the average of the yourScores array
console.log(getAverage(yourScores));
