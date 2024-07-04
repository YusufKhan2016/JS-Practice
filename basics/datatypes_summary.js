// there are 2 types of data types in javascript:

// 1.primitive
// 2.REFERENCE (NON-PRIMITIVE)

// PRIMITIVE ARE 7 TYPED :
// String, NUMBER, BOOLEAN, NULL, UNDEFINED, Symbol

// EXAMPLE:

const score = 100; //output: number
const scorevalue = 100.3; //output: number


const isLoddedin = false; //ouput : boolean
const outsideTemp = null; //output: object

let userEmail; //output: undefined

const id= Symbol('123'); // output : symbol
const anotherID = Symbol('123') //output: symbol

// console.log(id==anotherID); //output: false;



const bigNumber = 23423432423432235252343434234234n;

// console.log(typeof bigNumber); //output: bigint

// Reference (Non primitive)
// Array, OBJECTS, FUNCTION

const heros = ["shaktiman","NEERAJ","DOG"]; //output: object

const myfuntion = function ( ){
    console.log(" "); 
} // output: function

console.log(typeof heros);

    
