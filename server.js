const express = require('express');
// const Friends = require('./friends/friends-router')

const server = express();

server.use(express.json());
// server.use('/api', Friends)

server.get('/', (req, res) => {
  res.status(200).json({message: "This is the default zone"});
});


module.exports = server;