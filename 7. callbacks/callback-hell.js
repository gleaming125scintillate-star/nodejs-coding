const fs = require("fs");
const path = require("path");

// const filePath = path.join(__dirname, "input.txt");
// console.log(filePath);

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file", err);
    return;
  }

  const modifyFileData = data.toUpperCase();

  fs.writeFile("input.txt", modifyFileData, (err) => {
    if (err) {
      console.log("Error writing file", err);
      return;
    }

    console.log("data written to the new file");

    fs.readFile("input.txt", "utf8", (err, data) => {
      if (err) {
        console.log("Error reading file", err);
        return;
      }

      console.log(data);
    });
  });
});
