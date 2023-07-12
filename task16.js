var guests = ["Ironman ", "Batman", "Superman"];
var message = "Dinner on Sunday. My place. Be there 8pm.";
console.log(guests); // prints initial array
console.log(guests[0] + "," + " " + message);
console.log(guests[1] + "," + " " + message);
console.log(guests[2] + "," + " " + message);
console.log(guests[2] + " cannot make it");
guests.splice(2, 2, "Aquaman"); //replaced superman in the array with aquaman in the same array spot. (splice (adding index, deleting index, adding value))
console.log(guests[0] + "," + " " + message);
console.log(guests[1] + "," + " " + message);
console.log(guests[2] + "," + " " + message);
console.log(guests); // prints replaced person array
console.log(guests[0] + ", " + guests[1] + ", " + guests[2] + "; " + "Boys, We found a bigger table");
guests.unshift("Thanos");
console.log(guests); // prints new list after starting member added 
guests.splice(2, 0, "Flash"); // added flash in 2 number, i.e. 3rd sequence.
console.log(guests); // prints new list after adding member in middle
guests.push("Hulk"); // adds new member to the end
console.log(guests); // prints new ist after adding member at the end
console.log(guests[0] + "," + " " + message);
console.log(guests[1] + "," + " " + message);
console.log(guests[2] + "," + " " + message);
console.log(guests[3] + "," + " " + message);
console.log(guests[4] + "," + " " + message);
console.log(guests[5] + "," + " " + message);
