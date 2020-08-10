require('dotenv').config();

const express = require('express');
const connectDB = require('./connection');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());

connectDB();

app.get('/getEvents', require('../controllers/eventHandler').getEvents);
app.post('/api/event', require('../controllers/eventHandler').createEvent);
app.put('/api/event/:id', require('../controllers/eventHandler').updateEvent);
app.delete('/api/event/:id', require('../controllers/eventHandler').deleteEvent);

app.use(express.static('client/build'));
app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))

module.exports = app;