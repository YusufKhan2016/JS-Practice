// if

const isUserLoggedIn = true;
const temperature = 41;

if(temperature === 40) {
    console.log("less than 50");

}else{
    console.log(`temperature is greater than 50`);
}


// comparison operators =====>  ==, ===, <,>,<=,>=,!=,!==,!<,!>


// const score = 200

// if (score>100) {
//      let power = "fly";
//      console.log(`User power:${power}`);
// }

// console.log(`userpower: ${power}`);


// const balance = 1000;

// // if (balance > 500) console.log("test"); //implecet scope


// if (balance< 500) {
//     console.log(" less than 500 ");
// }else if(balance < 750) {
//     console.log("less than 750");

// }else {
//     console.log("Less than 12000");
// }


const userLoggedIn = true;
const debitCard = true;

const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if ( userLoggedIn && debitCard && 2==3) {
    console.log("allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle) {
    console.log(`user logged in`);
}



