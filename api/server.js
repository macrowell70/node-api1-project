// BUILD YOUR SERVER HERE
const express = require('express');
const Users = require('./users/model');

const server = express();

server.use(express.json());

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
