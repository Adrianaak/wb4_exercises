"use strict"

//this is our list of students to work with
let students = [
    { name: "Zephaniah", scores: [100, 96, 99, 92] },
    { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
    { name: "Siddalee", scores: [86, 72, 92] },
    { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
    { name: "Elisha", scores: [89, 100] },
    { name: "Ezra", scores: [100, 99, 100, 87] }
];

// This is us getting the total number of students
let numberOfStudents = students.length;

// Let's loop over the students array
for (let i = 0; i < numberOfStudents; i++) {
    let total = 0;
    let currentStudentScoresArray = students[i].scores;
    let numberOfScoreForStudent = currentStudentScoresArray.length;

    for (let j = 0; j < numberOfScoreForStudent; j++) {
        total += currentStudentScoresArray[j];
    }

    let studentAverage = total / numberOfScoreForStudent;

    console.log(`${students[i].name} has an average of ${studentAverage}`);
}

calcStudentAverages(students);

