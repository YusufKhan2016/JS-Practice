let myHeros = ["thor","spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: " sling",

    getSpiderPower : function() {
        console.log(`spidy pOWER IS ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function() {
    console.log(`hitesh is present in all object`);
}

// heroPower.hitesh();

// myHeros.hitesh();

Array.prototype.heyhitesh = function() {
    console.log(`test array with prototype's power`);


}


// myHeros.heyhitesh();
// heroPower.heyhitesh();


// +++++++++++++++++++++++++++++++++++++++++inheritance +++++++++++++++++++++++++++++++++++++++++++++++

const User = {
    name : "chai",
    email: "@google.com"
}

const teacher = {
    makeVideo: true
}

const TeachingsUPPORT = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: 'JS assignment',
    fullTime:true,
    __proto__:TeachingsUPPORT
}

teacher.__proto__= User  // old syntax;


Object.setPrototypeOf(TeachingsUPPORT, teacher);

let anotherUsername = "chai aur code             ";

String.prototype.trueLength = function() {
    console.log(`${this.name}`);
    console.log(`${this}`);
}

anotherUsername.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();