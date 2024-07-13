"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guest_list = ["Humna", "Yusra ", 'Zarish'];
console.log(guest_list);
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear ${guest_list[i]}: \n "you are invited to dinner"\n`);
}
console.log("Good news! we have found a bigger table, so more space is available .that's why i invited more guests:\n");
guest_list.unshift("Duaa");
guest_list.splice(2, 0, "Aqsa");
guest_list.push("Manahil");
for (let j = 0; j < guest_list.length; j++) {
    console.log(`Dear ${guest_list[j]}: \n "you are invited to dinner"\n`);
}
console.log(guest_list);
