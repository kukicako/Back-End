const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

module.exports = server;