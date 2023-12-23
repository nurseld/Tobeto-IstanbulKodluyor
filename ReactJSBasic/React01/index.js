//var slugify = require("slugify"); // commonjs version
import slugify from "slugify";
//import mymath from "./my-math.js";
//import { sum,diff } from "./my-math.js";
import mymath, { sum,diff,str,nmb,obj,arr } from "./my-math.js";

// const str = "Hello World!";
// //const result = slugify(str);
// const result = slugify(str, "=");
// console.log(result);

// console.log(sum(4,5));
//console.log(diff(5,2));

mymath(`SUM : ${sum(4,5)}`);
mymath(`DIFF : ${diff(5,2)}`);

console.log(str);
console.log(nmb);
console.log(obj);
console.log(obj.category);
console.log(obj.order);
console.log(arr);