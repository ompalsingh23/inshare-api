const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'/views'));

const PORT=process.env.port || 3000;

app.use(express.static("public"));
// app.use(express.json());
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
const connectDB = require('./config/db');
connectDB();

//Routes

app.use('/api/files', require('./routes/files'));
app.use('/files',require('./routes/show'));
app.use('/files/download',require('./routes/download'));

app.listen(PORT,()=>{
    console.log('listening on port'+PORT);
});