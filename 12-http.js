const http = require("http");

//request = res and response = res
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    return res.end("This is the about page");
  }
  res.end(`
  <h1>Oops!</h1>
  <p> We can't find that page</p>
  <a href ='/'> back home </a>`);
});

server.listen(5001);
