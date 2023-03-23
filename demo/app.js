const http = require("http");
const server = http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-type": "text/html" });
    //response.write('<h1>Welcome to the Node.js!</h1>');

    if (request.url === "/get") {
      response.write("Inside GET!");

      if (request.method === "GET") {
        response.end("<h1>GET!</h1>");
      }
    } else if (request.url === "/post") {
      response.write("Inside POST!");

      if (request.method === "POST") {
        response.end("<h1>POST!</h1>");
      }
    } else if (request.url === "/put") {
      response.write("Inside PUT!");

      if (request.method === "PUT") {
        response.end("<h1>PUT!</h1>");
      }
    } else if (request.url === "/delete") {
      response.write("Inside DELETE!");

      if (request.method === "DELETE") {
        response.end("<h1>DELETE!</h1>");
      }
    } else {
      response.end("<h1>Invalid request!</h1>");
    }
    response.end();
    
  })
  .listen(3000, () => console.log("http://localhost:3000"));
