console.log("hello js");

let array = [1, 2, 3, 4];
let b = array;
b.push(6);
// console.log(array);

console.log(array, "array");

setTimeout(() => {
  console.log("This message is delayed by 2 seconds");
}, 5000);

console.log("this is the last line of sync code");
