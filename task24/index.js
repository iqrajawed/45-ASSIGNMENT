"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//More Conditional Tests: You don’t have to limit the number of tests 
//you create to 10. If you want to try more comparisons, write more tests.
// Have at least one True and one False result for each of the following:
let a = 'Onion';
//• Tests for equality and inequality with strings
console.log('Tests for equality and inequality');
console.log(a === 'Onion');
console.log(a !== 'Onion');
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log('Numerical tests involving ');
let A = 4;
console.log(A === 4);
console.log(A !== 4);
console.log(A > 3);
console.log(A < 5);
console.log(A >= 3);
console.log(A <= 5);
//• Tests using "and" and "or" operators
console.log('Tests using "and" and "or" operators');
console.log(A == 4 && A <= 3);
console.log(A == 3 || A < 5);
//• Test whether an item is in a array
console.log('Test whether an item is in a array');
let Arr = ['potato', ' tomato', ' chilli'];
console.log(Arr.includes(' chilli'));
//• Test whether an item is not in a array
console.log('Test whether an item is not in a array');
console.log(Arr.includes('carrot'));
