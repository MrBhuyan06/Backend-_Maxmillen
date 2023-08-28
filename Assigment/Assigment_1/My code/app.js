//create a server
const { log } = require("console");
const app = require("http");
const { text } = require("stream/consumers");

const server = app.createServer((req, res) => {
  //create the server
  //   res.write("<h1>Hello</h1>");
  const url = req.url;
  //   console.log(url);
  if (url === "/") {
    res.write("<html>");
    res.write("<head> <title>User Server</title>");
    res.write("</head>");

    res.write(
      '<boby><form method="post" action="/create_user"><input type="text"/> <button type="submit"> send</button> </form></boby>'
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
  }
  else if()
});
const port = 3000;
server.listen(port, (req, res) => {
  console.log("server is running");
});
