const NAME = "abuzer";
console.log(NAME.toUpperCase());
console.log(NAME.toLowerCase());
console.log(NAME.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase()+word.substr(1).toLowerCase()));