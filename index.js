const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const { addUser, removeUser, getUser, getUsersInRoom, getUsersIdInRoom, updatePoints, assignAdmin, updateBid, setPlayer, getRoomBidData, checkAssignPlayer } = require('./rooms');

const PORT = process.env.PORT || 5000;
//const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        "Access-Control-Allow-Origin" : "localhost"
    }
});

// Array.from(socket.rooms)[1] <<< to get the room of a socket

io.on('connection', (socket) => {
    let roomName;
    socket.on('join', ({ name, room, points }, callback) => {
        let { error, user } = addUser({ id: socket.id, name, room, points });

        if(error)
            return callback(error);

        socket.join(user.room);
        roomName = user.room;

        socket.emit('updateThisUser', { user });
        io.in(user.room).emit('updateUsers', { users: getUsersInRoom({ room: roomName }) });

        let { bid, bidder, player } = getRoomBidData({ room: roomName });
        if(player) {
            socket.emit('updateBid', { bid, bidder });
            socket.emit('setPlayer', { player });
        }

        callback();
    });

    socket.on('setPlayer', ({ player }) => {
        setPlayer({ room: roomName, player });
        socket.to(roomName).emit('setPlayer', { player });
    });

    socket.on('updateBid', ({ bid, bidder }) => {
        let user = getUser({ id: socket.id, room: roomName });
        if(user.current_points >= bid) {
            updateBid({ room: roomName, bid, bidder });
            socket.to(roomName).emit('updateBid', { bid, bidder })
        }
        else {
            user.status = false;
            let { reset } = checkAssignPlayer({ room: roomName });
            if(reset) {
                let usersId = getUsersIdInRoom({ room: roomName });
                usersId.forEach((userId) => {
                    io.to(userId).emit('updateThisUser', { user: getUser({ id: userId, room: user.room }) });
                });
                
                let { bid, bidder, player } = getRoomBidData({ room: roomName });
                io.in(roomName).emit('updateBid', { bid, bidder });
                io.in(roomName).emit('setPlayer', { player });
            }
            io.in(roomName).emit('updateUsers', { users: getUsersInRoom({ room: roomName }) });
            socket.emit('updateThisUser', { user: getUser({ id: socket.id, room: roomName }) });
        }
    });

    socket.on('passBid', () => {
        let user = getUser({ id: socket.id, room: roomName });
        if(user) {
            user.status = false;
            let { reset } = checkAssignPlayer({ room: roomName });
            if(reset) {
                let usersId = getUsersIdInRoom({ room: roomName });
                usersId.forEach((userId) => {
                    io.to(userId).emit('updateThisUser', { user: getUser({ id: userId, room: user.room }) });
                });

                let { bid, bidder, player } = getRoomBidData({ room: roomName });
                io.in(roomName).emit('updateBid', { bid, bidder });
                io.in(roomName).emit('setPlayer', { player });
            }
            io.in(user.room).emit('updateUsers', { users: getUsersInRoom({ room: roomName }) });
            socket.emit('updateThisUser', { user: getUser({ id: socket.id, room: roomName }) });
        }
        
    });

    socket.on('disconnect', () => {
        let user = removeUser({ id: socket.id, room: roomName });
        
        if(user) {
            if(user.admin) {
                let newadminId = assignAdmin({ room: roomName });
                io.to(newadminId).emit('updateThisUser', { user: getUser({ id: newadminId, room: user.room }) });
            }
            io.in(roomName).emit('updateUsers', { users: getUsersInRoom({ room: user.room }) });
        }
    });
});


//app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));