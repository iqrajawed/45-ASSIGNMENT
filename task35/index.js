"use strict";
//Animals: Think of at least three different animals that have a common characteristic. 
//Store the names of these animals in a list, and then use a for loop to print  the end of your program
//out the name of each animal. • Modify your program to print a statement about each animal,
// such as A dog would make a great pet. • Add a line end at stating what these animals have in common. 
//You could print a sentence such as Any of these animals would make a great pet!
Object.defineProperty(exports, "__esModule", { value: true });
//Store the names of these animals in a list
let animals = ["dog", "cow", "goat", "horse"];
for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} would make a great pet.`);
}
//add a line end at stating 
console.log("Any of these animals would make a great pet!");
