# Live Auction App

Real-time player auction for fantasy leagues (2020): players join a room, get a budget and bid live.
The first player in a room is its admin. Rooms hold up to 20 players.

```
client/   React app (react-router, socket.io-client)
server/   Express + Socket.IO server: rooms, bids, budgets
```

## Run

```bash
cd server && npm install && npm start      # listens on $PORT, default 5000
cd client && npm install && npm start      # http://localhost:3000
```

The client connects to the server URL set as `ENDPOINT` in `client/src/components/Lobby/Lobby.js`;
point it to `http://localhost:5000` to run everything locally.

This repository merges the former `auctions_client` and `auctions_server` repositories, with their history.
