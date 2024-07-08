let myDate = new Date();
// console.log(myDate.toString()); output: Mon Jul 08 2024 21:49:48 GMT+0600 (Bangladesh Standard Time)

// console.log(myDate.toDateString()); //output: Mon Jul 08 2024
// console.log(myDate.toLocaleDateString()); output: 7/8/2024
// console.log(typeof myDate); output: Object


// let mynewDate = new Date(2024,11,18);
// let mynewDate = new Date(2024,11,18,12,1); output: 12/18/2024, 12:01:00 PM

// let mynewDate = new Date("2002-11-18"); output: 11/18/2002, 6:00:00 AM


// console.log(mynewDate.toLocaleString());

// let myTimeStamp  = Date.now(); 1720454503984
// console.log(Math.floor(Date.now()/1000)); output: 1720454566
let newDate = new Date();
console.log(newDate);
console.log(newDate.getTime());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

// 2024-07-08T16:06:33.706Z
// 1720454793706
// 1
// 6
newDate.toLocaleString('default',{
    weekday: "long",
})

