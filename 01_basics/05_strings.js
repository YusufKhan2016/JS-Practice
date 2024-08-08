const name = "Rafsun";
const repoCount = 50;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Rafsun');

console.log(gameName[0]);
console.log(gameName.__proto__); // gives value in object by take everyvalue as a character of a string

console.log(gameName.length);
console.log(gameName.toUpperCase());// converts to uppercase
console.log(gameName.charAt(2));  //index 2's character of a string

console.log(gameName.indexOf('f'));  // gives a specific index number of a string

const newString = gameName.substring(0,4);  //output: substring of  string

console.log(newString);

const newStringOne = "   rAFSUN    "
console.log(newStringOne);
console.log(newStringOne.trim()); // erases the spaces of a string

const url = "https://facebook.com/yusufkhan%20rafsun";

console.log(url.replace('%20','-')); //replaces existing character with given character
console.log(newString.includes("   rAFSUN    "));
