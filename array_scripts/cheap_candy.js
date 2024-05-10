"use strict"

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Reeses", price: 1.59},
    {product: "Snicker", price: 1.89},
    {product: "Gummy Bears", price: 4.89},
    {product: "Now & Later", price: 1.09},
    {product: "Skittles", price: 1.89},
    {product: "Twix", price: 1.65},
]


function totalCandyProducts(candyArray) {
    let total = 0;
    for (let i = 0; i < candyArray.length; i++) {
        total += candyArray[i].price;
    }
    return total;
}

function findCandiesUnderPrice(productsArray, priceLimit) {
    let cheapCandies = [];
    for (let candy of productsArray) {
        if (candy.price < priceLimit) {
            cheapCandies.push(candy);
        }
    }
    return cheapCandies;
}

function findCandiesWithName(productsArray, keyword) {
    let candiesWithKeyword = [];
    for (let candy of productsArray) {
        if (candy.product.includes(keyword)) {
            candiesWithKeyword.push(candy);
        }
    }
    return candiesWithKeyword;
}

function doWeCarry(productsArray, candyName) {
    for (let candy of productsArray) {
        if (candy.product === candyName) {
            return true;
        }
    }
    return false;
}

console.log("Total price of all candy products: $" + totalCandyProducts(products).toFixed(2));

// Find candies that cost less than $4.00
let cheapCandies = findCandiesUnderPrice(products, 4.00);
console.log("Candies that cost less than $4.00:");
console.log(cheapCandies);

// Find candies with "M&M" in their name
let mmCandies = findCandiesWithName(products, "M&M");
console.log("Candies with 'M&M' in their name:");
console.log(mmCandies);

// Check if we carry "Swedish Fish"
let carriesSwedishFish = doWeCarry(products, "Swedish Fish");
console.log("Do we carry 'Swedish Fish'?");
console.log(carriesSwedishFish ? "Yes" : "No");