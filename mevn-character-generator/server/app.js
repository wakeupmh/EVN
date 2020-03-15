require('dotenv').config();
const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(`/`, require('./routes'));

server.listen(3000, () => console.log("Server started!"));
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database!'));