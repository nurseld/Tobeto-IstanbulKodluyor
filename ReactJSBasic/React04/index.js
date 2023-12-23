
const arr = ["Apple", "Banana", "Kiwi", "Banana"];

//push
// arr.push("Orange");
// console.log(arr);

//map
// for (let i = 0; i < arr.length; i++) {
//     const item = arr[i];
//     console.log(item);    
// }

// arr.map((item) => console.log(item));

//find
// const result = arr.find((item) => item === "Banana");
// console.log(result);

//filter
// const results = arr.filter((item) => item === "Banana" || item === "Kiwi");
// console.log(results);
// results.map(item => console.log(item));

// some
// const result = arr.some(item => item === "Banana");
// console.log(result);

// every
// const result = arr.every(item => item === "Banana");
// console.log(result);

// includes(like some)
const result = arr.includes("Banana");
console.log(result);