require('dotenv').config();
const express = require('express');
const configViewsEngine = require('./config/viewsEngine')
const webRoutes = require('./routes/web');

// import express from 'express';
const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

//config template engine
configViewsEngine(app);

//khai bao route
app.use('/',webRoutes);





app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})