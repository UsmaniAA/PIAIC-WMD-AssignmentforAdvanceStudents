var items; // array of undefined items
function make_sandwich(items) {
    console.log("This sandwich has: "); //every user change print statement
    for (var i = 0; i < items.length; i++) // loop runs to ensure as much items needed are added
        console.log(items[i]); // print the items
}
make_sandwich(["pickle", "cucumber", "tomato"]);
make_sandwich(["bread", "chicken"]);
make_sandwich(["pickle", "cucumber", "tomato", "bbq sauce", "pepperoni", "cheese"]);
