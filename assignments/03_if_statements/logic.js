// Homework Assignment #3 - If Statements

/* MORTALITY */

/*
    All men are mortal
    Socrates is a man.
    Therefore, socrates is mortal.
*/

// Collection of men
let men = [{ name: "Aristoteles" }, { name: "Pythagoras" }];

// Socrates is a man
men.push({ name: "Socrates" });

// All men are mortal
men.forEach((man) => {
    man.mortal = true;
});

// Conclusion
men.forEach((man) => {
    if (man.mortal) {
        console.log(man.name + " is mortal");
    } else {
        console.log(man.name + " is not mortal");
    }
});

// Console output:
// ...
// "Socrates is mortal"

/* CAKES */

/*
    This cake is either vanilla or chocolate.
    This cake is not chocolate.
    Therefore, this cake is vanilla.
*/

// This cake is either vanilla or chocolate.
let this_cake_is_chocolate = true;
let this_cake_is_vanilla = true;

// This cake is not chocolate
this_cake_is_chocolate = false;

// Conclusion
if (this_cake_is_chocolate) {
    if (this_cake_is_vanilla) {
        console.log("This cake is chocolate and vanilla");
    } else {
        console.log("This cake is chocolate");
    }
} else if (this_cake_is_vanilla) {
    console.log("This cake is vanilla");
}

// Console output:
// "This cake is vanilla"
