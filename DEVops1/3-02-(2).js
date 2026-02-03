const http = require("http");

http.createServer((req, res) => {
    const data = {
        name: "Node Server",
        status: "Running"
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
}).listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
