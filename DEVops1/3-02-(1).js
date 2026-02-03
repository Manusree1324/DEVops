const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Node.js HTML Response</title>
        </head>
        <body>
            <h1>Node.js HTML Response</h1>
            <p>This is served from Node.js</p>
        </body>
        </html>
    `);

    res.end();
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

