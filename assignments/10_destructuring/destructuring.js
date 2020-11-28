// Homework Assignment # 10 - Destructuring

// =============
// DESTRUCTURING
// =============

/*
    The destructuring assignment syntax is a JavaScript expression
    that makes it possible to unpack values from arrays,
    or properties from objects, into distinct variables.
*/

// ======
// ARRAYS
// ======

/*
    VARIABLE ASSIGNMENT:
        The most basic function of destructuring is the assignment of values
        from an array to a new or previously declared variable.
*/

// Assignment to new variable
let color = [255, 255, 255, 1];
[red, green, blue, alpha] = color;

console.log(red, green, blue, alpha);
// -> 255 255 255 1

// Separated declaration and assignment
let a, b;
[a, b] = [2, 4];

console.log(a, b);
// -> 2 4

/*
    VALUE SWAPPING:
        A common use case for destructuring is the swapping
        of values without the usage of temporary variables.
*/

a = 1;
b = 2;

[a, b] = [b, a];

console.log(a, b);
// -> 2 1

/*
    MULTIPLE RETURN VALUES:
        A function can return multiple values using an array.
        Destructuring can make it easier to work with an returned array.
*/

const car = () => ['VW', '1999'];
[manufacturer, year] = car();

console.log(manufacturer, age);
// -> Ben 24

/*
    USEFUL TRICKS:
        - Skip values from the array.
        - Use some values and assign the rest to an own variable.
        - Set default values, if the provided array does not
        provide enough values.
*/

// Skipping Values
[a, , b] = [1, 2, 3];

console.log(a, b);
// -> 1 3

// Assign Rest:
[fist, second ...rest] = [1, 2, 3, 4];

console.log(first, second, rest);
// -> 1 2 [3, 4]

// Default Values:
[a = 10, b = 12] = [14];

console.log(a, b);
// -> 14 12


// =======
// OBJECTS
// =======

/*
    VARIABLE ASSIGNMENT:
        The most basic function of destructuring is the assignment of parameters
        from an object to a new or previously declared variable.
        The order of the variables is not important. However the variable names
        must match those of the parameters.
        Parentheses around the assignment statement are needed when
        using destructuring without declaration.
*/

// Assignment to new variable
let obj = {
    a: 12,
    b: false
}
let {b, a} = obj;

console.log(a, b);
// -> 12 false

// Separated declaration and assignment
let c, d;
({c, d} = {c: 1, d: 2});

console.log(c, d);
// -> 1 2

/*
    UNPACKING FUNCTION PARAMETER:
        Destructuring can be used to select specific values from an complex object
        provided as a parameter to a function.
    NESTED OBJECTS:
        Nested objects can be destructed by specifying the property name
        and then destructuring that object normally.
*/
let john = {
    name: "John",
    parents: {
        mother: "Emily",
        father: "David"
    }
}

const getName = ({name}) => name;

function getMother({name, parents: {mother: name_mother}}) {
    return `${name}'s mother is ${name_mother}`;
}

console.log(getName(john));
// -> "John"
console.log(getMother(john));
// -> "John's mother is Emily"

/*
    OPTIONAL FUNCTION PARAMETER:
        With destructuring it is possible to make an parameter object optional
*/

function getFather({name = "John", parents: {father: name_father = "Dave"}} = {}) {
    return `${name}'s mother is ${name_father}`;
}
log 

/*
    USEFUL TRICKS:
        - Assign new variable names
        - Set default values, if the unpacked parameter from the object is undefined.
        - Use some values and assign the rest to an own variable.
        - Use computed property names for destructuring.
        - Invalid property names can be used in an object and destructed into an valid variable 
*/

// New Variable Names
obj = {a: 33, b: "abc"};
let {p: foo, q: bar} = obj;
 
console.log(foo, bar);
// -> 33 "abc"

// Default Values
({a = 10, b = 5} = {a: 3});

console.log(a, b);
// -> 3 5

// New Variable Names and Default Values
({a: foo = 22, b: bar = "cba"} = {a: 5});

console.log(foo, bar);
// -> 5 "cba"

// Assign Rest:
let {a, b, ...rest} = {a: 1, b: 2, c: 3: d: 4};

console.log(a, b, rest);
// -> 1 2 { c: 3, d: 4}

// Computed Property Names
let key = 'b';
let {[key]: foo} = {b: 'bar'};

console.log(foo);
// -> "bar"

// Invalid Property Names
foo = { 'bar': true };
({ 'bar': bar } = foo);

console.log(bar);
// -> true

// ==========================
// NESTING ARRAYS AND OBJECTS
// ==========================

/*
    DESTRUCTURING IN FOR LOOPS:
        Destructuring can be used to simplify the accessing of an array element
*/

// Arrays in Array
let coordinates = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
];

for ([x, y, z] of coordinates) {
    console.log(x, y, z);
}

// Objects in Array
let people = [
    {
        name: "Tom",
        age: 12
    },
    {
        name: "Jane",
        age: 23
    }
];

for({name, age} of people) {
    console.log(name, age);
}

/*
    COMBINED DESTRUCTURING:
        You can select a some parameters of a specific element in an array
*/

// age of the second element
let [, { age }] = people;

console.log(age);
// -> "Jane"