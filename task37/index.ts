//Large Shirts: Modify the make_shirt() function so that shirts are large by
//default with a message that reads I love TypeScript. Make a large shirt and medium
//shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size: string = "Large", message: string = "I love TypeScript"){
    console.log(`The shirt is ${size} and it says "${message}".`);
}

// Make a large shirt with default message
make_shirt();

// Make a medium shirt with default message
make_shirt("Medium");

// Make a small shirt with a different message
make_shirt("Small", "I love this shirt");