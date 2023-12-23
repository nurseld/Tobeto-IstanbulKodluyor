function first() {
    return "first";
}

function second(){
    return "second";
}

function third(){
    return "third";
}

// first();
// second();

// setTimeout(second, 1000);

// setTimeout(() => {
//     second();
//     third();
// }, 1000);

// third();

async function f() {
    
    let p1 = new Promise(function (resolve, reject) {

      const result = first();
      resolve(result);

    });
  
    let p2 = new Promise(function (resolve, reject) {

      setTimeout(() => {
        const result = second();
        resolve(result);
      }, 2000);

    });
  
    let p3 = new Promise(function (resolve, reject) {

      const result = third();
      resolve(result);

    });
  
   

    // First Usage
    // console.log(await p1);
    // console.log(await p2);
    // console.log(await p3);

    //SecondUsage
    // p1.then((val) => {
    //     console.log(val);

    //     p2.then((val2) => {
    //         console.log(val2);

    //         p3.then((val3) => console.log(val3));

    //     });
    // });

    //Third Usage
    // p1.then((val) => {
    //     console.log(val);
    //     return p2;
    // }).then(() => {
    //     console.log(val2);
    //     return p3;
    // }).then((val3) => console.log(val3));

    //4th Usage
    Promise.all([p1, p2, p3])
    .then(result => {
        result.map(item => console.log(item));
      });

}


f();