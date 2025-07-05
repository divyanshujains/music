    const express = require('express');
    const app = express();
    const userRoutes = require('./routes/user.route');
    const songRoutes = require('./routes/song.route');




    app.use(express.json());
    app.use('/', userRoutes);
    app.use('/songs', songRoutes);


    module.exports = app;
