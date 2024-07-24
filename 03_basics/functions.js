function sayMyName() {
    console.log("R");
    console.log("A");
    console.log("F");
    console.log("S");
    console.log("U");
    console.log("N");
}

// sayMyName();

// function addTwoNumbers (number1, number2){ // here in the function number1, number2 are parameters
//     console.log(number1 + number2);
// }

function addTwoNumbers (number1, number2){ // here in the function number1, number2 are parameters
        let result = number1+number2;

        return result;
    }
    
let x= addTwoNumbers(3,4); //here the 3,4 are arguments

// console.log(x);

function loginUserMessage (username) {
    if (!username) return "please enter a username";

    return `${username} just logged in`
}

// console.log(loginUserMessage("rafsun"));


// function calculateCartPrice(...num1) {
//     return num1;

// }

function calculateCartPrice(val1,val2,...num1) {
    return num1 +" " + val1 + " "+ val2;

}

// console.log(calculateCartPrice(200,400,500,600,2000,3000));

const obj = {
    username: "rafsun",
    age: 21,
}

function anyobj(object) {
    console.log(`hey ${obj.username} is you age ${obj.age}?`);

}

// anyobj(obj)

 const myNewArr = [200, 400, 300];

 function arr(a) {
    return a[1];
 }

 console.log(arr(myNewArr));