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
    res.write("<head> <tittle>User Server</tittle>");
    res.write("</head>");
    res.write("<body>");
    res.write(
      '<form method="post" action="/create_user"><input type="text"/> <button type="submit> send</button> </form>'
    );

    res.write("</form>");
    res.write("</html>");
  }
});
const port = 3000;
server.listen(port, (req, res) => {
  console.log("server is running");
});
