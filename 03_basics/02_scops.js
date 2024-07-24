let a = 10;
const b = 20;
var c= 30;

if (true) {
    let a = 10;
    const b = 20;
    console.log("INNER:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "RAFSUN";
    function two(){
        const website = "Youtube";
        // console.log(username);
    }

    // console.log(website); // can't be printed cause website is in the local scope of funtion two

    two();
}

one();

if(true) {
    const username = "carfew";
    if (username === "carfew") {
        const website = "lockdown";
        console.log(username+website);
    }
    // console.log(website);
}

// console.log(username);


