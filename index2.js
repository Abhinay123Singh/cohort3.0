const express = require("express");
// Create a hospital app
const app = express();

// Function to calculate the sum from 1 to n
function sum(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans = ans + i;
    }
    return ans;
}

// Define a route for the root URL
app.get("/", function (req, res) {
    const n = parseInt(req.query.n, 10); // Parse n as an integer

    // Check if n is a valid number
    if (isNaN(n) || n < 1) {
        return res.send("Please provide a valid positive number for n.");
    }

    const ans = sum(n);
    res.send("Hi, your answer is " + ans);
});

// Listen on a specific port
const PORT = 3000; // You can change the port number if needed
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
