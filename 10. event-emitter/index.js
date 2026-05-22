// // Requiring the Events module
// const EventEmitter = require("events");

// const myFirstEmitter = new EventEmitter();

// // Register a listener
// myFirstEmitter.on("greet", (name) => {
//   console.log(`Hello ${name}`);
// });

// myFirstEmitter.emit('greet', "Ashish Raj");

const EventEmitter = require("events");
const myFirstEmitter = new EventEmitter();

myFirstEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}`);
});

myFirstEmitter.emit("greet", "Ashish Raj");
