var guests = ["Ironman ", "Batman", "Superman"];
var message = "Dinner on Sunday. My place. Be there 8pm.";
console.log(guests);
console.log(guests[0] + "," + " " + message);
console.log(guests[1] + "," + " " + message);
console.log(guests[2] + "," + " " + message);
console.log(guests[2] + " cannot make it");
guests.splice(2, 2, "Aquaman");
console.log(guests[0] + "," + " " + message);
console.log(guests[1] + "," + " " + message);
console.log(guests[2] + "," + " " + message);
console.log(guests);