const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);



mongoose.connect('mongodb://localhost:27017/controletrocaoleo',{
    useNewUrlParser: true,

})

app.use((req, res, next) => {
    req.io = io;

    next();
})



app.use(cors()); // Permite que qualquer aplicação acesse o backend
app.use('/files', express.static(path.resolve(__dirname, '..','uploads','resized')));
//app.use('/files', express.static(path.resolve(__dirname, '..','uploads','resized')));

app.use(require('./routes'));
server.listen(3333);

