var username1 = [];
{
    if (username1.length == 0)
        console.log("We need to find users.");
    else
        for (var i = 0; i < username1.length; i++) {
            if (username1[i] == "admin")
                console.log("Hello admin, would you like to see status report?");
            else if (username1[i] == "beta")
                console.log("Hello " + username1[i] + ". Thankyou for logging in again.");
            else if (username1[i] == "echo")
                console.log("Hello " + username1[i] + ". Thankyou for logging in again.");
            else if (username1[i] == "alpha")
                console.log("Hello " + username1[i] + ". Thankyou for logging in again.");
            else if (username1[i] == "delta")
                console.log("Hello " + username1[i] + ". Thankyou for logging in again.");
        }
}
;
