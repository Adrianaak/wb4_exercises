"use strict"

/*
name
address
city
state
zip
*/

let person = {
    name: "Adriana Kendricks",
    address: "1234 easy Drive",
    city: "Dallas",
    state: "Tx",
    zip: "75205"
};

function printContact(contact) {

    console.log(`
    ${contact.name}
    ${contact.address}
    ${contact.city}, ${contact.state} ${contact.zip}
    `);
}

//run the function with the person we created above
printContact(person);
