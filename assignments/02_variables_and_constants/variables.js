// Homework Assignment #2 - Variables and Constants

const language = "english";

/* CONSTANTS */

/*
    const
        The value of a constant must be assigned in the declaration statement.
        A Constant is a read-only reference to a specific value. Therefore a constant cannot be reassigned. The contents of this value can be changed though.

    use-case:
        A constant is used if a value is often used and doesn't need to be change or as a reference to an object, whose structure should not change.
*/

const days_in_a_week = 7;
const birthday = { day: 1, month: 1, year: 1970 };

/* VARIABLES */

/*
    In general variables declared as let or var can be reassigned and the properties of their value can be changed.
    The initialization of a variable can be separate from the declaration.
*/

/*
    let
        The scope of a variable declared as let is limited to the surrounding block statement or expression.
        The redeclaration of a let variable at the same scope-level produces a SyntaxError.

    use-case:
        In general it is advisable to always use let instead of var for variable declarations, because of its stricter rule set.
        A common use-case is the iterating variable in for loops.
*/

for (let index = 0; index < 5; index++) {
    console.log(index);
}

/*
    var
        Variables declared as var are initialized with the value undefined.
        The scope of a var variable is either the entire function, in which it is used,
        or the top-level (global) scope, if declared outside a function.
        When declared globally a property in the global object will be created
        A redeclaration of a var variable will not result in a SyntaxError.

    use-case:
        A variable declared with var can create a property in the global object on the fly.
        It also can be used to deconstruct something into an outer scope.
        (Both use-cases could also be easily implemented with let variables)
*/

try {
    var result = language.toUpperCase();
} catch (error) {
    // handle exception
}
console.log(result);

/* CONCEPTS */

/*
    temporal dead zones
        Unlike variables declared as var, let variables and constants are not initialized with a value.
        In the time between declaration and initialization they are in a "temporal dead zone", because if 
        one of them is accessed before the initialization is evaluated a ReferenceError will be thrown.
*/

console.log(deadzone); // ReferenceError
let deadzone = 5;

/*
    var hoisting
        Variable declarations are processed before any code execution.
        Therefore the position of the declaration in its scope is irrelevant.
        "Hoisting" means that the variable declaration is moved to the top of its scope.
        Initializations or reassignments are unaffected.

    The following examples are in that sense equivalent.
*/

console.log(hoisting);
var hoisting = 3;
console.log(hoisting);

var hoisting;
console.log(hoisting);
hoisting = 3;
console.log(hoisting);
