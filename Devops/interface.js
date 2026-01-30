const http = require("http");

// Create server
http.createServer((req, res) => {
    // Example URL: http://localhost:3000/?a=10&b=5
    const url = new URL(req.url, `http://${req.headers.host}`);
    
    const a = Number(url.searchParams.get("a"));
    const b = Number(url.searchParams.get("b"));

    if (isNaN(a) || isNaN(b)) {
        res.end("Please provide valid numbers: ?a=10&b=5");
        return;
    }

    res.write(`Addition: ${a + b}\n`);
    res.write(`Subtraction: ${a - b}\n`);
    res.write(`Multiplication: ${a * b}\n`);
    res.write(`Division: ${a / b}`);
    res.end();

}).listen(3000);

console.log("Server running at http://localhost:3000");
