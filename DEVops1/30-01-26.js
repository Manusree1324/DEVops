// Hello World
console.log("Hello World from Node.js");

// ---------------- HTTP SERVER ----------------
const http = require("node:http");

http.createServer((req, res) => {
    res.end("Welcome to Node.js Server");
}).listen(3000);

console.log("Server running on port 3000");

// ---------------- READLINE (User Input) ----------------
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask name
rl.question("Enter your name: ", (name) => {
    console.log("Hello " + name);

    // Ask number for even/odd
    rl.question("Enter a number: ", (num) => {
        num = Number(num);
        if (num % 2 === 0)
            console.log("Even Number");
        else
            console.log("Odd Number");

        rl.close();
    });
});

// ---------------- ARITHMETIC OPERATIONS ----------------
let a = 10, b = 5;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);

// ---------------- FILE OPERATIONS ----------------
const fs = require("fs");

// Create & write file
fs.writeFileSync("sample.txt", "This is a Node.js file");
console.log("File created successfully");

// Read file (sync)
const data = fs.readFileSync("sample.txt", "utf-8");
console.log("File Content (Sync):", data);

// Read file (async)
fs.readFile("sample.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("Error reading file");
    } else {
        console.log("File Content (Async):", data);
    }
});

// ---------------- FACTORIAL ----------------
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

console.log("Factorial of 5:", factorial(5));

// ---------------- SIMPLE CALCULATOR ----------------
const rl2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl2.question("Enter two numbers (space separated): ", (input) => {
    let [x, y] = input.split(" ").map(Number);
    console.log("Add:", x + y);
    console.log("Sub:", x - y);
    console.log("Mul:", x * y);
    console.log("Div:", x / y);
    rl2.close();
});

// ---------------- DATE & TIME ----------------
const date = new Date();
console.log("Current Date & Time:", date.toLocaleString());