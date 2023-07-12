var World:string[] = ["Rome" , "Dubai" , "Newyork" , "London" , "Tokyo"];
console.log(World);
var WorldSorted:string[] = World.concat().sort(); // concat creates a new copy without mutating original. Sort sorts it in alphabetical order.
console.log(WorldSorted);
console.log(World);
console.log(WorldSorted.reverse()); // reversed the alpahebtical order of the above created temporaty array.
console.log(World); 
console.log(World.reverse()); // reversed the orginal array
console.log(World.reverse()); // re-reversed the orginal array into original form
console.log(World.sort()); // sorting in alphabetical order
console.log(World.reverse()); // reverse alphabetical order