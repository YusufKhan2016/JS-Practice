const myArr = [0,1,2,3,4,5,6,7];

const myheros = ["shaktiman","naagraj"];
const myArr2 = new Array(1,2,3,4);
console.log(myArr[1]);
console.log(myheros[1]);

// array method

myArr.push(14);
myArr.push(20);
myArr.pop();
console.log(myArr);

myArr.unshift(14);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
console.log(myArr);

console.log("A",myArr);
const myNarr= myArr.slice(1,3);

console.log(myNarr);

console.log(myArr);

console.log('B',myArr.splice(1,3));
