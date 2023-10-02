let items: string [] // array of undefined items
function make_sandwich (items:String []) //function
{
    console.log("This sandwich has: "); //every user change print statement
    for (let i=0; i< items.length; i++) // loop runs to ensure as much items needed are added
    console.log(items[i]); // print the items
}

make_sandwich (["pickle" , "cucumber", "tomato"]);
make_sandwich (["bread", "chicken"]);
make_sandwich (["pickle" , "cucumber", "tomato", "bbq sauce", "pepperoni", "cheese"]);
