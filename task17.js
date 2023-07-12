//REMOVING ELEMENTS FROM ARRAY
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
console.log("Boys, only 2 people can come.");
guests.splice(2, 1); // deleted the person on 2nd sequence of array. (sequence of the eleemnts, how mahy to delete from here)
console.log(guests); // prints to check if deleted
var sorry = (" , sorry you're out");
console.log("Flash" + sorry);
guests.splice(0, 1); // deleted the person on 0th sequence of array
console.log(guests); // prints to check if deleted
var sorry = (" , sorry you're out");
console.log("Thanos" + sorry);
guests.splice(3, 1); // deleted the person on 4th sequence of array
console.log(guests); // prints to check if deleted
var sorry = (" , sorry you're out");
console.log("hulk" + sorry);
guests.splice(2, 1); // deleted the person on 3rd sequence of array
console.log(guests); // prints to check if deleted
var sorry = (" , sorry you're out");
console.log("Aquaman" + sorry);
console.log(guests);
console.log(guests[0] + ", relax you're still coming.");
console.log(guests[1] + ", relax you're still coming.");
guests.splice(0, 2); // deletes both elements.
console.log(guests); // prints the empty list at the end
