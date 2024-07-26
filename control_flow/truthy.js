const userEmail = "hasanrafsun5@gmail.com";

if(userEmail) console.log("got user email");
else console.log("dont't have user email");

// falsy values

// false, 0, -0,BigInt 0n, "", null, undefined, NaN

// truthy values

// "0",'false', " ", [], {}, function() {} 

const arr = [];

if(arr.length === 0) console.log("array is empty");

const emptyOBJ = {}

if(Object.keys(emptyOBJ).length === 0) {
    console.log("object is empty");

}


// Nullish Coalescing Operator (??): null undefined

// let val1 = 5 ?? 10;
val1 = null ?? 1000000;

console.log(val1);


// terniary operator 

const balance = 1000;

balance<=1000 ? console.log("false"):console.log("true");
