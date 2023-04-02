const express = require('express');
const crypto = require('crypto');
const cors = require('cors');

// Create an Express application
const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Configure Express to parse JSON request bodies
app.use(express.json());

// Define a hashing function for user IDs using the Node.js crypto module
function hashUserID(userID) {
    // Define a secret key for the hashing process
    const secret = 'your-secret-key';
    // Create a HMAC object using the SHA-256 algorithm and the secret key
    const hash = crypto.createHmac('sha256', secret)
        .update(userID) // Update the HMAC object with the user ID
        .digest('hex'); // Generate a hash digest as a hexadecimal string
    return hash;
}

// A mock user database to store registered users

// User registration API
app.post('/register', (req, res) => {
    // Extract username and password from the request body
    const { username, password } = req.body;

    // Check if both username and password are provided
    if (!username || !password) {
        // If not, return an error response
        return res.status(400).json({ message: 'Username and password are required' });
    }

    // Hash the user's username to create a unique user ID
    const hashedUserID = hashUserID(username);
    // Create a new user object with the hashed user ID, username, and password
    const newUser = { id: hashedUserID, username, password };
    // Add the new user to the mock database
    users.push(newUser);

    // Return a success response along with the hashed user ID
    res.status(201).json({ message: 'User registered successfully', id: hashedUserID });
});

// User login API
app.post('/login', (req, res) => {
    // Extract username and password from the request body
    const { username, password } = req.body;

    // Check if both username and password are provided
    if (!username || !password) {
        // If not, return an error response
        return res.status(400).json({ message: 'Username and password are required' });
    }

    // Hash the provided username to find the corresponding user ID
    const hashedUserID = hashUserID(username);
    // Search for the user with the hashed user ID and matching password in the database
    const user = users.find(u => u.id === hashedUserID && u.password === password);

    // If no matching user is found, return an error response
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // If a matching user is found, return a success response along with the hashed user ID
    res.status(200).json({ message: 'Login successful', id: hashedUserID });
});

// Start the server and listen for incoming connections
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
