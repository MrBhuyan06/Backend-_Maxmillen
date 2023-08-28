const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  // res.write("<h1>HELLO</h1>");
  let url = req.url;
  console.log(url);
  let method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter body</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"> <button type="submit">send</button></form</body>'
    );
    res.write("</html");
    return res.end();
  } else if (url === "/message" && method === "POST") {
    let body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      let message = parseBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
});
const port = 4000;
server.listen(port, (req, res) => {
  console.log("server is up");
});
