const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const Port = process.env.PORT || process.env.API_PORT;

const socketServer = require('./socketServer')
const authRoutes = require('./routes/authRoutes');
const friendInvitationRoutes = require('./routes/friendInvitationRoutes')

const app = express();
app.use(express.json());
app.use(cors());

// Register the routes
app.use('/api/auth/', authRoutes);
app.use('/api/friend-invitation', friendInvitationRoutes);

const server = http.createServer(app);
socketServer.registerSocketServer(server);

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    server.listen(Port, ()=>{
        console.log(`Server is Listining at ${Port}`);
    });
})
.catch(err =>{
    console.error(err);
})
