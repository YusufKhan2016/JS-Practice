const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    //DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async task is promised');
        resolve();
    }, 1000);

});


promiseOne.then(function(){
    console.log("promise task completed");
})

new Promise(function(resolve,reject) {
    setTimeout(() => {
        console.log("async 2 promised");
        resolve();
    }, 1000);
}).then(function(){
    console.log("async 2 resolved");
})
