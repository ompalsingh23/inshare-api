// require('dotenv').config();

const mongoose =require('mongoose');
function connectDB(){
    //database connection
    mongoose.connect("mongodb+srv://ompal:Ompal%4012345@cluster0.fybqn.mongodb.net/inshare" , {useNewUrlParser: true, useUnifiedTopology: true});
    const connection = mongoose.connection;

    connection.once('open',() => {
        console.log('Data Base connected');
    })
}

module.exports = connectDB;
