//T177 COMP3123
//HEESU CHO Lab Exercise 04


//Add the express framework and nodemon to package.json
const express = require('express');

const SERVER_PORT = 8089;
const app = express();

// A GET request to /hello that returns "Hello Express JS".
app.get("/hello", (req, res) => {
    res.send("Hello Express JS");
});

// A GET request to /user with query parameters for firstname and lastname.
app.get("/user", (req, res) => {
    const firstname = req.query.firstname || 'heesu';
    const lastname = req.query.lastname || 'cho';
    res.json({ firstname, lastname });
});

// A POST request to /user with path parameters for firstname and lastname.
app.post("/user/:firstname/:lastname", (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname });
});

// Starting the server
app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:8089/`);
});
