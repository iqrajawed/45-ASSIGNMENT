//Magicians: Make a array of magician’s names. Pass the array to a function called
//show_magicians(), which prints the name of each magician in the array.


function show_magicians(magicians: string[]):void{ 
  for(const magician of magicians){
    console.log(magician);
    
  }    }


// Array of magician's names
let magicianName: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller","Juan Tamariz"];

// Call the function to show the names of the magicians
show_magicians(magicianName);