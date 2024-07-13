/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/

let guest_list:string[]=["Humna","Yusra ",'Zarish']
console.log(guest_list)
for(let i=0; i< guest_list.length; i++ ){
    console.log(`Dear ${guest_list[i]}: \n "you are invited to dinner"\n`)
}
console.log("Good news! we have found a bigger table, so more space is available .that's why i invited more guests:\n")
guest_list.unshift("Duaa");
guest_list.splice(2,0,"Aqsa");
guest_list.push("Manahil");
console.log(guest_list);
for (let j=0; j<guest_list.length; j++){
    console.log(`Dear ${guest_list[j]}: \n "you are invited to dinner"\n`)
}
console.log("Unfortunately, i could'nt arrange a big table ,that's why i invited only two person for dinner");

while(guest_list.length>2){
let notInvitegGguest =guest_list.pop()
    console.log(`Sorry, dear ${notInvitegGguest}  "due to limited space, I can't invited"\n`)
}

for(let k=0; k < guest_list.length; k++){
console.log(`you are invited for dinner,please come and enjoy,  ${guest_list[k]}\n `)}''
guest_list.pop()
guest_list.pop()
console.log(guest_list)