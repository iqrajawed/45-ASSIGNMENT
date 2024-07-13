"use strict";
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
Object.defineProperty(exports, "__esModule", { value: true });
//the list of users is not empty.
let userName = ['Iqra', 'Humna', 'Yusra', 'Zarish'];
userName = [];
// Check if the list is  empty
if (userName.length === 0) {
    console.log("We need to find some users!");
    // Check if the list is not empty   
}
else {
    for (let i = 0; i < userName.length; i++)
        console.log(userName);
}
