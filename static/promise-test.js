'use strict';
function test(resolve, reject){
    let timeOut = Math.random() * 2;
    console.log("timeOut: " + timeOut);
    setTimeout(function(){
        if(timeOut < 1){
            console.log("call resolve()");
            resolve("200 OK");
        }
        else{
            console.log("call reject()");
            reject("timeOut in " + timeOut + "seconds.");
        }
    }, timeOut * 1000);
}
var p1 = new Promise(test);
var p2 = p1.then(function(message){
    console.log(message);
});
var p3 = p2.catch(function(message){
    console.log(message);
});

