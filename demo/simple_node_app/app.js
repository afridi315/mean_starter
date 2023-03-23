const http = require("http");
const fs = require("fs");
const dir = "./public/";
const port = process.env.PORT | 3000;

const server = http
  .createServer((request, response) => {
    if (request.url === "/") render(response, "index.html");
    else if (request.url === "/about") render(response, "about.html");
    else if (request.url === "/contact") render(response, "contact.html");
    else {
      response.writeHead(404, { "Content-type": "text/html" });
      response.end("<h1>404 File Not Found!</h1>");
    }
  })
  .listen(port, () => {
    console.log(`http://localhost:${port}`);
  });

const render = (response, file) => {
    fs.readFile(dir+file, (error, data) => {
        if(error) {
            response.writeHead(404, {'Content-type' : 'text/html'});
            response.end('<h4>404 File Not Found!</h4>');        
        }

        response.writeHead(200, {'Content-type' : 'text/html'});
        return response.end(data);
    });
};
