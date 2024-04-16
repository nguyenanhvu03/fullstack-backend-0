const express = require('express');
const path = require('path');
require('dotenv').config();

// import express from 'express';
const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/abc', (req, res) => {
    // res.send('Check ABC')
    res.render('xample.ejs')
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port,hostname, () => {
    console.log(`Example app listening on port ${port}`)
})