const nums = [1,2,3,4,5,6,7];

const myNums = nums.filter((num) => num>=5);

// console.log(myNums);

const newNUMS = nums.filter((num) => {
    return num>=5;
})

// console.log(newNUMS);

// same thing if we want to print them usng forEach the format will be like this :

const n = [];
myNums.forEach((num) => {
    if(num >=5 ) {
        n.push(num);
    }
});

// console.log(n);

