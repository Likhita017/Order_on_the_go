# Code Examples

## User Authentication

### Backend Login/Register
```javascript
// Example of a Node.js backend for user authentication
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
// Database configuration...

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    // Save user logic here...
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // Retrieve user logic...
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
        const token = jwt.sign({ id: user._id }, 'your_jwt_secret');
        res.json({ token });
    } else {
        res.status(401).send('Invalid credentials');
    }
});
```

## Frontend Login/Register Components

### Login Component (React)
```javascript
import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        // Handle login success...
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
```

### Register Component (React)
```javascript
import React, { useState } from 'react';

const Register = () => {
    // Similar to Login component but handles register logic
};
```

## Product Fetching with Filtering
```javascript
// Fetch products with optional filtering
const fetchProducts = async (filter) => {
    const response = await fetch(`/products?filter=${filter}`);
    const products = await response.json();
    return products;
};
```

## Add to Cart Functionality
```javascript
// Add product to cart
const addToCart = (productId) => {
    // Logic to add item to cart
    cart.push(productId);
};
```

## Order Placement
```javascript
// Function to place an order
const placeOrder = async (orderDetails) => {
    const response = await fetch('/place-order', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(orderDetails)
    });
    return await response.json();
};
```

## Admin Product Management
```javascript
// Admin can add/edit products
const manageProduct = async (productId, productData) => {
    await fetch(`/admin/products/${productId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(productData)
    });
};
```
