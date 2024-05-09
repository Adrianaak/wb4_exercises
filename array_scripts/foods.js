"use strict"

let lunch = [
    { item: "Steak Fajitas", price: 9.95 },
    { item: "Chips and Guacamole", price: 5.25 },
    { item: "Sweet Tea", price: 2.79 }
];

function totalTheMeals(mealsArray) {

    let total = 0;

    //create a variable to keep track of the total
    let numberOfMeals = mealsArray.length

    for (let i = 0; i < numberOfMeals; i++) {

        total += mealsArray[i].price

    }

    return total;
}

let lunchTotal = totalTheMeals(lunch);
let lunchTax = lunchTotal * (8 / 100);
let lunchTip = lunchTotal * (18 / 100);
let totalDue = lunchTotal + lunchTax + lunchTip;

//output results in console
console.log("The lunch total was: " + lunchTotal.toFixed(2));
console.log("The tax was: " + lunchTax.toFixed(2));
console.log("The tip was: " + lunchTip.toFixed(2));
console.log("The total due is: " + totalDue.toFixed(2));
