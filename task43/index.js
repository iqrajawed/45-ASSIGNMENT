"use strict";
//Unchanged Magicians: Start with your work from Exercise 40. Call the function 
//make_great() with a copy of the array of magicians’ names. Because the original
//array will be unchanged, return the new array and store it in a separate array.
//Call show_magicians() with each array to show that you have one array of the original
//names and one array with the Great added to each magician’s name.
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    // Print the list of magicians
    //     magicians.forEach(magician => console.log(magician));
    // }
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great(magicians) {
    // Create a copy of the original array
    const new_magicians = magicians.slice();
    // Add 'the Great' to each magician's name
    for (let i = 0; i < new_magicians.length; i++) {
        new_magicians[i] += " the Great";
    }
    // Return the new array with modifications
    return new_magicians;
}
// Sample list of magicians
let magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Display original list
console.log("Original list of magicians:");
show_magicians(magicians);
// Create a copy of the original array and modify it to add 'the Great'
const modifiedMagicians = make_great(magicians);
// Display modified list
console.log("\nList of magicians added with 'the Great' :");
show_magicians(modifiedMagicians);
// // Display original list to show it remains unchanged
// console.log("\nOriginal list of magicians (unchanged):");
// show_magicians(magicians);
