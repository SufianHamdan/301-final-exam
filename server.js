'use strict';

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const superagent = require('superagent');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const DB = process.env.DATABASE_URL;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());

// import our controllers 
// API controller
const apiController = require('./controllers/psychonauts.api.controller');
// crud controller
const crud = require('./controllers/psychonauts.crud.controller');




// API proof of life
app.get('/', (req, res) => {
    res.send('everything is working!')
});


// GET all (starting) data from API
app.get('/get-characters', apiController.getApiData);


// initialize our CRUD endpoints
// CREATE new favorite character to our DB (CREATE/ POST)
app.post('/favorite', crud.createFavoriteItem);

// GET all (favorite) retrieve favorite characters from our DB (GET/ READ)
app.get('/favorite', crud.getFavoriteItems);

// Delete item from our DB (DELETE/ DELETE)
app.delete('/favorite/:slug', crud.deleteItem);

//Update item from our DB (Update/ PUT)
app.put('/favorite/:slug', crud.updateItem);

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});