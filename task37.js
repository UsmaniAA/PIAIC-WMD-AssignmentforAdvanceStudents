function make_shirt1(size, msg) {
    if (size === void 0) { size = "Large"; }
    if (msg === void 0) { msg = "I love typescript"; }
    console.log("size is ", size, " And the msg is ", msg);
}
;
make_shirt1();
make_shirt1("medium");
make_shirt1("Large", "i love java"); // need to learn how to add default first item value
make_shirt1("Small", "I love java");
