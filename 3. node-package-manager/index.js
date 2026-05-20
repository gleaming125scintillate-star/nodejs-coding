const lodash = require("lodash");
const names = ["raju", "ashish", "rohan", "shourav"];
const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize);
