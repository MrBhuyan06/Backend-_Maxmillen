//create a server
const { log } = require("console");
const app = require("http");
const fs = require("fs");
const { text } = require("stream/consumers");
const { Stream } = require("stream");

const server = app.createServer((req, res) => {
  //create the server
  //   res.write("<h1>Hello</h1>");
  const url = req.url;
  //   console.log(url);
  const method = req.method;
  //   console.log(method);
  //   console.log(url);
  if (url === "/") {
    res.write("<html>");
    res.write("<head> <title>User Server</title>");
    res.write("</head>");

    res.write(
      '<boby><form method="POST" action="/create_user"><input type="text"/name="name"> <button type="submit"> send</button> </form></boby>'
    );

    res.write("</html>");

    return res.end();
  } else if (url === "/user") {
    res.write("<html>");
    res.write("<head> <title>User Server</title>");
    res.write("</head>");

    res.write("<boby><ul><li>Abhishek</li><li>smriti</li></ul></boby>");

    res.write("</html>");
    return res.end();
  } else if (url === "/create_user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      let name = parseBody.split("=")[1];
      console.log(name);

      fs.writeFile("name.txt", name, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
});
const port = 3000;
server.listen(port, (req, res) => {
  console.log("server is running");
});
