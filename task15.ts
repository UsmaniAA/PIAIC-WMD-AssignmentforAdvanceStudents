//REPLCING MEMBERS IN AN ARRAY
var guests:string [] = ["Ironman ", "Batman", "Superman"];
var message = "Dinner on Sunday. My place. Be there 8pm.";
console.log(guests);
console.log(guests[0] + "," + " " + message);
console.log(guests[1] + "," + " " + message);
console.log(guests[2] + "," + " " + message);
console.log(guests[2] + " cannot make it");
guests.splice(2,2, "Aquaman"); //replaced superman in the array with aquaman in the same array spot
console.log(guests[0] + "," + " " + message);
console.log(guests[1] + "," + " " + message);
console.log(guests[2] + "," + " " + message);
console.log (guests);
