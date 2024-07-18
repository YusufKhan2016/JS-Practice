//objects
const mySym = Symbol("key1");

const jsUser = {
    name: "Rafsun",
    age: 21,
    [mySym]: "mykey1", //symbol should be declared like this
    location: "Ashulia",
    email: "hasanrafsun5@gmail.com",
    isLoggedIn : false,
    lastLoggeddays: ["SATURDAY","SUNDAY"],
}

// console.log(jsUser.email);  ❌
// console.log(jsUser["name"]);   ✅

// console.log(typeof jsUser[mySym]); 

jsUser.email = "hasanrafsun324234234@gmail.com";
// Object.freeze(jsUser);
// jsUser.email = "hasanrafsun123@gmail.com";

// console.log(jsUser["email"]);

jsUser.greeting = function() {
    console.log("Hello world");
}

jsUser.greetingtwo = function() {
    console.log(`let's make our future brighter ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());