const { log } = require("console");
const http = require("http");
const fs = require("fs");

// function rqListerner(req, res) {}

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter body</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"> <button type="submit">send</button></form</body>'
    );
    res.write("</html");
    return res.end();
  }
  if (url === "/message" && method === "POST");
  {
    fs.writeFileSync("message.txt", "DUMMY");
    // res.writeHead(302)//redirection
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  //   process.exit();
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>MY First page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server</h1></body>");
  res.write("</html");
  res.end();
});

const port = 3000;
// server.listen(port, (req, res) => {
//   console.log("server is running");
// });
server.listen(port);
