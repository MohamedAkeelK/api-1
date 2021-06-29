const express = require('express');
const app = express();
require('dotenv/config');
const mongoose = require('mongoose');
const postsRoute = require('./routes/posts');
const cors = require('cors');

//MIDDLEWARES
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({extended: true }));
app.use('/posts', postsRoute);

// ROUTES

app.get('/', (req, res) => {
    res.send("HOME PAGE");
})

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, () => {
    console.log('connected to database')
})

app.listen(3000);

