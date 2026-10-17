const express = require("express");

const app = express();

const PORT = 5000;

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to my Node.js server!");
});
// User route
app.get("/user", (req, res) => {
    res.json({
        id: 1,
        name: "Student Name",
        course: "B.E- CSE"
    });
});

// Products route
app.get("/products", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Laptop",
            price: 50000
        },
        {
            id: 2,
            name: "Mobile",
            price: 20000
        }
    ]);
});

// POST request
app.post("/message", (req, res) => {
    res.send("POST request received successfully!");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});