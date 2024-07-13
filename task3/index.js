"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Name Cases: Store a person’s name in a variable, and then print that person’s
// name in lowercase, uppercase, and titlecase
const personName = "iqra jawed";
// Convert to lowercase
console.log(personName.toLowerCase());
// Convert to uppercase
console.log(personName.toUpperCase());
// Convert to titlecase
console.log(personName.charAt(0).toUpperCase() + personName.slice(1));
