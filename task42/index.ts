// Great Magicians: Start with a copy of your program from Exercise 39.Write a
// function called make_great() that modifies the array of magicians by adding the
// phrase the Great to each magician’s name. Call show_magicians() to see that the
// list has actually been modified.


function show_magicians(magicians: string[]):void {
  
    for(let i = 0; i < magicians.length; i++)
        {
            
                     console.log(`${magicians[i]} the great`);
        }
}



// Sample list of magicians
let make_great: string[] = ["Harry ", "Juan ","David ", "Penn Jillette", "Teller"];
show_magicians(make_great);



