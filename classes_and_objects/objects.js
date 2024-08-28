function multipleBy5(num) {
    return num+5;
}

multipleBy5.power = 2;

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

// here functions , string , arrays are also a objects in themselves

function createUser (username, score) {
    this.username = username;
    this.score = score;
}
createUser.prototype.increment = function() {
    this.score++;
}

createUser.prototype.printMe = function() {
    console.log(this.score);
}

const chai = new createUser("chai",23);
const tea = createUser("tea",250);   


chai.printMe()


/*

here's what happens behind the scenes when the new keyword is used :

A new object is created : The new keyword initiates the creation of a new javscript object.


A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means tha is has access to properties and methods defined on the constructor's prototype.


The constructor is called: The constructor function is called with the specified arguments and this is bound
to newly created object. If no explicit value is return.
*/