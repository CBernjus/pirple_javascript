// Homework Assignment #4 - Functions

/* MORTALITY */

/*
    All men are mortal
    Socrates is a man.
    Therefore, socrates is mortal.
*/

// Collection of men
let men = ["Aristoteles", "Pythagoras", "Socrates"];

function isAMortalMan(name) {
    // Because all men are mortal I only need to check wether the name is in the men collection
    if (men.includes(name)) return true;
    return false;
}

/* CAKES */

/*
    This cake is either vanilla or chocolate.
    This cake is not chocolate.
    Therefore, this cake is vanilla.
*/

// Console output:
// "This cake is vanilla"

// possibleCakes must be an array of strings representing the flavour of the cake
// All possibilities: "vanilla", "chocolate", "vanilla or chocolate"

function cakeFlavour(possibleCakes, isChocolate) {
    if (typeof possibleCakes !== "object" || typeof isChocolate !== "boolean")
        return false;
    return possibleCakes.filter(
        (cake) => !cake.includes(isChocolate ? "chocolate" : "vanilla")
    );
}

// Exemplary Console Output
// ------------------------

// cakeFlavour("hallo", true)
// => false
// cakeFlavour([], 3)
// => false
// cakeFlavour(["vanilla"], 3)
// => false
// cakeFlavour(["vanilla"], true)
// => ["vanilla"]
// cakeFlavour(["vanilla"], false)
// => []
// cakeFlavour(["vanilla", "chocolate"], false)
// => ["chocolate"]
// cakeFlavour(["vanilla", "chocolate", "vanilla"], false)
// => ["chocolate"]
// cakeFlavour(["vanilla", "chocolate", "vanilla"], true)
// => (2) ["vanilla", "vanilla"]
// cakeFlavour(["vanilla", "chocolate", "vanilla or chocolate"], true)
// => ["vanilla"]
