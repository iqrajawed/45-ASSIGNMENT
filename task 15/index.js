"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guest_list = ["Humna", "Yusra ", 'Zarish'];
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear ${guest_list[i]}: \n "you are invited to dinner"\n`);
}
console.log(`Ohh! ${guest_list[0]}: \n "Can't come to dinner"`);
guest_list[0] = "Duaa";
for (let j = 0; j < guest_list.length; j++) {
    console.log(`Dear ${guest_list[j]}: \n "you are invited to dinner"\n`);
}
