"use strict";
//T-Shirt: Write a function called make_shirt() that accepts
// a size and the text of a message that should be printed on the shirt.
// The function should print a sentence summarizing the size of the shirt and
// the message printed on it. Call the function.
Object.defineProperty(exports, "__esModule", { value: true });
//function called make_shirt()
function make_shirt(size, message) {
    console.log(`The shirt is size ${size} and she says "${message}".`);
}
// Call the function
make_shirt("M", "I want to buy medium size");
