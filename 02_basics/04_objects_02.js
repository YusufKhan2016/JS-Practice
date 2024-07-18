// const tinderUser = new Object(); //singleton object
const tinderUser = {}; // non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;


// console.log(tinderUser);
 
const regularUser = {
    email: "somone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Rafsun",
            lastname: "Khan",
        }
    }
}


console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2: "b"}
const obj2 = {3: "a", 4: "b"};

const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
