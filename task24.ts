let name1 = "ali";
let name2 = "john";

//test 1
console.log("is name1 Ali? I predict True");
console.log(name1 ="ali");

//test2
console.log ("is name1 == name2? I predict False")
console.log (name1 == name2);

//test3
console.log ("is name1 != name2? I predict True")
console.log (name1 != name2);



//lowercase tests
let word1 = "HI";
let word2 = "hi";

console.log("Is word1 lowercase? I predict False.");
console.log(word1.toLowerCase() == "hi");

console.log("Is word2 lowercase? I predict True.");
console.log(word2.toLowerCase() == "hi");


//numerical tests
let num1 = 10;
let num2 = 5;

console.log("is num1 == num2? i predict False");
console.log(num1 == num2);


let a = true;
let b = false;

console.log ("is a true and b false ? i predict true");
console.log(a && !b);

console.log ("is a true and b true? I predict false");
console.log (a && b);

console.log ("is a false or b false? I predict true");
console.log (!a || !b);