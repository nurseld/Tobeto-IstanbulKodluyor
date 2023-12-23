// setTimeout(function(){
//     console.log("setTimeout");
// }, 3000)

// setTimeout(() => {
//     console.log("setTimeout 2");
// }, 3000)

// setTimeout(() => console.log("setTimeout 3"), 3000);

// setInterval(function(){
//     console.log("setInterval")
// }, 1000);

function runCallBackFunc(callback){
    callback();
}

// runCallBackFunc(function(){
//     console.log("Hello World");
// });

runCallBackFunc(() => console.log("Hello World"));
