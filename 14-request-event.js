const http = require("http");

// const server = http.createServer((req,res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer();
// emits request event
// subscribe to it / listen for it / respond to it

server.on("request", (req, res) => {
  res.write("Hello and ");
  console.log("refresh clicked!");
  res.end("Welcome");
});

server.listen(5001, () => {
  console.log("✅ Server is running at http://localhost:5001/");
});
