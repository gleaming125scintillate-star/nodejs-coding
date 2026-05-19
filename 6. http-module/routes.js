// const http = require("http");

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   // here, / is the base url, like, http://localhost:3000/
//   if (url === "/") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Home Page");
//   } else if (url === "/projects") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Projects Page");
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("This Page cannot be found");
//   }
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server is now listening to port ${port}`);
// });

const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (url === "/projects") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Projects Page");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("This Page can not be found");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is now listening to port ${port}`);
});
