require('dotenv').config();

const mongoose =require('mongoose');
function connectDB(){
    //database connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL , {useNewUrlParser: true, useUnifiedTopology: true});
    const connection = mongoose.connection;

    connection.once('open',() => {
        console.log('Data Base connected');
    })
}

module.exports = connectDB;
