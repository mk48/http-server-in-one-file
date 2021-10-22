const http = require("http");
const empData = require("./emp-data.json");

const host = "localhost";
const port = 8080;

const requestListener = function (req, res) {
  const url = req.url;
  const method = req.method;

  res.setHeader("Content-Type", "application/json");

  if (url === "/emps" && method === "GET") {
    res.writeHead(200);
    res.end(JSON.stringify(empData));
  } else {
    res.end("{response: not found}");
  }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
