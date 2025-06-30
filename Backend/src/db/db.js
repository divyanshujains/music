const mongoose = require('mongoose');   

function connectDB() {

    try {

        mongoose.connect('mongodb://localhost:27017/spotify')
        .then(() => {
            console.log('Connected to the database successfully');
        })
        
    } catch (error) {
        console.error('Error connecting to the database:', error);
        
    }



}


module.exports = connectDB;
