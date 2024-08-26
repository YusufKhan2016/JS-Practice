// promising
const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    //DB calls, cryptography, network
    setTimeout(() => {
        // console.log('Async task is promised');
        // resolve(); // here resolve is to pass data to promise.then
    }, 1000);

});

//consuming the promise 
promiseOne.then(function(){
    // console.log("promise task completed");
})

new Promise(function(resolve,reject) {
    setTimeout(() => {
        // console.log("async 2 promised");
        // resolve();
    }, 1000);
}).then(function(){
    // console.log("async 2 resolved");
})


const promiseThree = new Promise((function(resolve, reject) {
    setTimeout(() => {
        // resolve({username:"rafsun",email: "hasanrafs@gmail.com"})
    }, 0);    
})) 

promiseThree.then((x)=>{
    // console.log(x); // print the data of resolve from promise object;
})

const promiseFour = new Promise((resolve,reject)=> {
    setTimeout(() => {
        let error = false;
        if(!error) {
            resolve({username:"rafsun", age: 20});
        }else {
            reject("error: something went wrong");
        }
    }, 0);
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((myusername) =>{
    console.log(myusername);
})
.catch((error) => {
    console.log(error);
}).finally(()=>{console.log("the promise finally either resolved or rejected")})

// here the then is for callback for resolve or rejection
// and the catch is for callback rejection
// finally is for either resolved or rejected any of them 
// happens the finally callback will execute 

const promiseFive = new Promise((resolve,reject)=> {
    setTimeout(() => {
        let error = false;
        if(!error) {
            resolve({username:"javascript", password: "123"});
        }else {
            reject("error: JS went wrong");
        }
    }, 0);
})


