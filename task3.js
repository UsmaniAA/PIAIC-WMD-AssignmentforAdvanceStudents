var NAME = "abuzer";
console.log(NAME.toUpperCase());
console.log(NAME.toLowerCase());
console.log(NAME.replace(/\w\S*/g, function (word) { return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(); }));
// function titleCase(NAME)
// {var word = NAME.toLowerCase().split(' ');
// for (var i =0; i<word.length; i++)
// {NAME[i] = NAME[i].charAT(0).toUpperCase() + NAME[i].slice(1);}
// return NAME.join(' ');}
// titleCase(NAME);
// console.log(titleCase(NAME));
