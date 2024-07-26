const user = {
    username : "Rafsun",
    price : 999,
    welcomePage: function( ) {
        console.log(`${this.username} , welcome to my world`);
        console.log(this);
    }
}

// user.welcomePage();
// user.username = "yusuf khan";
// user.welcomePage();

// console.log(this);

// function chai() {
//     const username = "rafsun";
//     console.log(this);
// }

// chai();

// const chai = () => {
//     let username = "yusuf khan";
//     // console.log(this.username);
//     console.log(this);

// }

// chai();


// ++++++++++++ arrow funtion ++++++


// const addTwoNumbers = (num1,num2) => {
//     return num1 + num2;
// }

// console.log(addTwoNumbers(1,2));


// +++++++++++++ implecet return ++++++++++++
const addTwoNumbers = (num1, num2) => (num1 + num2);

console.log(addTwoNumbers(3,4));

