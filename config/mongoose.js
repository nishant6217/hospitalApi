
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://hosp6217:hosp6217@hospapi.6j7xe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const db = mongoose.connection;


db.on('error',console.error.bind('error!!'));

db.once('open',function(){
    console.log('Successfully connected to database :: MongoDB');
});

module.exports = db;
