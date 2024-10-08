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

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const b = books.filter( (num) => {
    return num.genre == 'Fiction' && num.edition >= 2000
})

console.log(b);
