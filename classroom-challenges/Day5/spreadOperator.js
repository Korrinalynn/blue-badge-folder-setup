/*
    -SPREAD OPERATOR

        -the spread operator pulls out all the elements in an array and gives them back to you as a standalone list of elements.
        -It takes in an iterable object and regular object and expands it into individual elements. the spread operator is commonly used to make copies of an array.
            -allows to manipulate both arrays and objects
        -denoted by the ellipsis (...)

*/

let students = ["Sterling", "Mitch"];
//WRONG SYNTAX
// ...students //output => "sterling", "Mitch"

let copiedStudents = [...students];
// let copiedStudents = [[students]]; 
//wrong NOTE: That it is not going this => [ [ [ 'Sterling', 'Mitch' ] ] ] [ 'Sterling', 'Mitch' ]
//the spread operator is good at making a new copy of that array.
console.log(copiedStudents, "Line 19"); // outputs: [ 'Sterling', 'Mitch' ] [ 'Sterling', 'Mitch' ]
students.push("Rodney"); //Code happens from top to bottom. and we are pushing to the original array after using the spread operator
console.log(students, "Line 21");

//MATH
console.log(Math.min(1.99, 5, -3));
const prices = [10.99, 5.99, 3.99, 6.59];
console.log(Math.min(prices)); // NaN = Not A Number //cant find a number becasue its an array, not individual numbers
console.log(Math.min(...prices));

//CONCATENATE ARRAYS
let sent1 = [1, 2, 3, 4];
let sent2 = [5, 6, 7, 8];
let concat = [...sent1, ...sent2];
console.log(concat);
//concat is [1, 2, 3, 4, 5, 6, 7, 8];

//PASS ARGUMENTS
let sentence = ["Oh, Hi Mark", false, 2];

function sent(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

sent(...sentence);
/*
OUTPUT:
    Oh, Hi Mark
    false
    2
*/

///COPY AN OBJECT
let obj = {a: 1, b: 2, c: 3};
let copyObj = {...obj};        //BOTH DO THE SAME THING: { a: 1, b: 2, c: 3 } { a: 1, b: 2, c: 3 }
console.log(obj, copyObj);

//NOT THE SAME
// let obj = {a: 1, b: 2, c: 3};
// let copyObj = {obj};        //HOW THEY DIFFER: { a: 1, b: 2, c: 3 } { obj: { a: 1, b: 2, c: 3 } }
// console.log(obj, copyObj);

//MERGE OBJECTS
let obj1 = {a: 1, b: 2, c: 3, d: 4}
let obj2 = {e: 5, f: 6, g: 7, h: 8}

let merge = {...obj1, ...obj2};
console.log(merge);

//NOTE
let obj4 = {a: "Hello", b: "Mark", c: "!"};
let obj5 = {a: "Goodbye"}

let obj6 = {...obj4, ...obj5};
// when merging objects when they have the same keys, the later object will take precidents over the first one
console.log(obj6); //output: { a: 'Goodbye', b: 'Mark', c: '!' }

//ERROR
let obj = {a: 1, b: 2, c: 3};
let copyObj = [...obj];
console.log(copyObj);