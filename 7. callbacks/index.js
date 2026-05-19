const fs = require("fs");

function person(name, callbackFn) {
  console.log(`Hello ${name}`);
  callbackFn();
}

function address() {
  console.log("India");
}

person("Ashish Raj", address);

// function place(name, feature) {
//   console.log(`Place name is ${name}`);
//   feature();
// }

// function features() {
//   console.log("Great Mountain View");
// }

// place("Mussoorie", features);

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file", err);
    return;
  }
  console.log(data);
});
