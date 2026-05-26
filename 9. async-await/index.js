// function delayFn(time) {
//   return new Promise((resolve) => setTimeout(resolve, time));
// }

// async function delayedGreet(name) {
//   await delayFn(2000);
//   console.log(name);
// }
// delayedGreet("Ashish Raj");

// async function division(num1, num2) {
//   try {
//     if (num2 === 0) throw new Error("Can not divide by 0");
//     return num1 / num2;
//   } catch (error) {
//     console.error("error", error);
//     return null;
//   }
// }

// async function mainFn() {
//   console.log(await division(10, 5));
//   console.log(await division(10, 0));
// }

// mainFn();

async function delayedFunc(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

let num = 10;

function count(num) {
  console.log(num);
  num--;
}

setInterval(() => count(num), 1000);

// let num = 10;
// const timer = setInterval(() => {
//   console.log(num);

//   num--;

//   if (num === 0) {
//     clearInterval(timer);
//   }
// }, 1000);

async function sum(num1, num2) {
  console.log("wait for 10 seconds to see the sum");
  await delayedFunc(11000);
  return console.log(`The sum is: ${num1 + num2}`);
}

sum(5, 4);
