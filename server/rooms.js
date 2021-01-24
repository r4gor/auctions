let rooms = [];

const addUser = ({ id, name, room, points }) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();
    points = Math.abs(parseInt(points));

    if(!rooms[room]) {
        rooms[room] = {
            current_bid: 0,
            current_bidder: '',
            current_player: '',
            users: []
        };
    }

    let existingUser = Object.values(rooms[room].users).find((user) => user.name === name);
    if(existingUser)
        return { error: 'Username is taken' };

    let usersInRoom = getUsersInRoom({ room }).length;
    if(usersInRoom === 20)
        return { error: `Room ${room} is full` }

    let admin = false;
    if(!usersInRoom)
        admin = true;

    let user = { name, room, current_points: points, players: [], admin, status: true};
    rooms[room].users[id] = user;

    return { user };
}

const removeUser = ({ id, room }) => {
    if(rooms[room]) {
        let user = rooms[room].users[id];
        delete rooms[room].users[id];
        
        let usersInRoom = getUsersInRoom({ room }).length;
        if(!usersInRoom)
            delete rooms[room];

        return user;
    }
}

const getUser = ({ id, room }) => rooms[room] ? rooms[room].users[id] : 'undefined';

const getUsersInRoom = ({ room }) => rooms[room] ? Object.values(rooms[room].users) : 0;

const getUsersIdInRoom = ({ room }) => rooms[room] ? Object.keys(rooms[room].users) : 0;

const updatePoints = ({ id, room, points }) => {
    rooms[room].users[id].current_points += points;
}

const assignAdmin = ({ room }) => {
    if(rooms[room] && rooms[room].users) {
        Object.values(rooms[room].users)[0].admin = true;
        return Object.keys(rooms[room].users)[0];
    }
}


const updateBid = ({ room, bid, bidder }) => {
    rooms[room].current_bid = parseInt(bid);
    rooms[room].current_bidder = bidder;
}

const setPlayer = ({ room, player }) => {
    rooms[room].current_player = player;
}

const getRoomBidData = ({ room }) => {
    return { bid: rooms[room].current_bid, bidder: rooms[room].current_bidder, player: rooms[room].current_player };
}

const checkAssignPlayer = ({ room }) => {
    let check = Object.values(rooms[room].users).filter((user) => user.status === true).length;

    if(check <= 1) {
        if(rooms[room].current_bid !== 0 && typeof Object.values(rooms[room].users).find((user) => user.name === rooms[room].current_bidder) !== 'undefined' && Object.keys(rooms[room].users).length > 1) {
            let user = Object.values(rooms[room].users).find((user) => user.status === true);
            user.players.push(rooms[room].current_player + `  (${rooms[room].current_bid}p)`);
            user.current_points -= rooms[room].current_bid;
        }

        resetRoom({ room });
        return { reset: true };
    }
    return { reset: false };
}

const resetRoom = ({ room }) => {
    rooms[room].current_bid = 0;
    rooms[room].current_bidder = '';
    rooms[room].current_player = '';
    Object.values(rooms[room].users).forEach((u) => {
        if(u.current_points > 0)
            u.status = true;
    });
}

module.exports = { addUser, removeUser, getUser, getUsersInRoom, getUsersIdInRoom, updatePoints, assignAdmin, updateBid, setPlayer, getRoomBidData, checkAssignPlayer };