// BUILD YOUR SERVER HERE
const express = require('express');
const Users = require('./users/model');

const server = express();

server.use(express.json());

server.post('/api/users', (req, res) => {
    Users.insert(req.body)
    .then(result => {
        if (!req.body.name || !req.body.bio) {
            res.status(400).json({ message: "Please provide name and bio for the user" });
            return;
        }
        res.status(201).json(result);
    })
    .catch(result => res.status(500).json({ message: "There was an error while saving the user to the database" }));
});

server.get('/api/users', (req, res) => {
    Users.find().then(result => {
        if (result == null) {
            res.status(500).json({ message: "the user information could not be retrieved" });
            return;
        }
        res.json(result)
    });
})

module.exports = server; // EXPORT YOUR SERVER instead of {}
