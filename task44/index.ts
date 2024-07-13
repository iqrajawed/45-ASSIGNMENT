//Sandwiches: Write a function that accepts a array of items a person wants on a
//sandwich. The function should have one parameter that collects as many items as
//the function call provides, and it should print a summary of the sandwich that is
//being ordered. Call the function three times, using a different number of 
//arguments each time.

function makeSandwich(...ingredients:string[]) {
    // Print summary of the sandwich
    console.log("Making a sandwich with the following ingredients:");
    for (let i =0; i < ingredients.length;i++) {
        console.log("- " + ingredients[i]);
    }
    console.log("Sandwich is ready!\n");
}

// Call the function with different number of arguments
makeSandwich("Bread", "grill meat", "Tomato", "Mayonnaise");
makeSandwich("katchup", "Cheese");
makeSandwich("Peanut Butter", "Jelly");
