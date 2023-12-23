var slugify = require("slugify");

const str = "Hello World!";
//const result = slugify(str);
const result = slugify(str, "=");

console.log(result);