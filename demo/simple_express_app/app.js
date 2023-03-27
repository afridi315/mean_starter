const express = require("express");

const fs = require("fs");
const dir = "./public/";
const port = process.env.PORT | 3000;

const app = express();

app.get("/", (req, resp) => {
  render(resp, "index.html");
});

app.get("/about", (req, resp) => {
  render(resp, "about.html");
});

app.get("/contact", (req, resp) => {
  render(resp, "contact.html");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

const render = (response, file) => {
  fs.readFile(dir + file, (error, data) => {
    if (error) {
      response.writeHead(404, { "Content-type": "text/html" });
      response.end("<h1>404 File Not Found!</h1>");
    }

    response.writeHead(200, { "Content-type": "text/html" });
    return response.end(data);
  });
};
