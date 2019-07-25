const express = require('express');

const Characters = require('');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {});

server.get('/users', (req, res) => {});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** server up on port ${port} **\n`));
