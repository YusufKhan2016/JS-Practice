const coding = ["js","ruby","java","python","cpp"]

// there so many styles to print the coding arrays element using forEach method and function
coding.forEach( function greet(value) {
    // console.log(value);
} );

coding.forEach( (x) => {
    // console.log(x);
});

function printMe(item) {
    // console.log(item);
}

coding.forEach(printMe);

coding.forEach ( (item, index, arr) => {
    // console.log(item,index,arr);
})


const myCoding = [
    {
        language: "javascript",
        languageFile: "js",

    },
    {
        language: "java",
        languageFile: "java",

    },
    {
        language: "python",
        languageFile: "py",

    },

]


myCoding.forEach((item) => {
    console.log(item.language)
})