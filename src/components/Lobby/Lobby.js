import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useHistory } from 'react-router-dom';

import Interface from '../Interface/Interface';
import Userpanel from '../Interface/Userpanel/Userpanel';
import CurrentPlayer from '../Interface/CurrentPlayer/CurrentPlayer';
import CurrentBid from '../Interface/CurrentBid/CurrentBid';


let socket;

const Lobby = ({ location }) => {
    const [user, setUser] = useState({});
    const [users, setUsers] = useState([]);

    let [player, setPlayer] = useState('');

    let [bid, setBid] = useState(0);
    let [bidder, setBidder] = useState('');
    
    const ENDPOINT = 'https://server.simpleauctions.tk/';

    const history = useHistory();
    const [shouldRedirect, setRedirect] = useState(false);
    const [locErr, setLocErr] = useState({});
    useEffect(() => {
        if(shouldRedirect) {
            history.push({
                pathname: `${locErr.loc}`,
                state: {
                    error: `${locErr.error}`
                }
            });
        }
    }, [shouldRedirect, locErr, history]);


    useEffect(() => {
        let room = location.pathname.substring(1);
        let name;
        let points;
        if(!location.state || !location.state.name || !location.state.points) {
            setLocErr({ loc: '/', error: 'Insert Data' });
            setRedirect(true);
            return;
        }
        else {
            name = location.state.name;
            points = location.state.points;
        }

        socket = io(ENDPOINT);
        socket.emit('join', { name, room, points }, (error) => {
            if(error) {
                setLocErr({ loc: '/', error });
                setRedirect(true);
            }
        });

    }, [ENDPOINT, location]);

    useEffect(() => {
        socket.on('updateThisUser', ({ user }) => {
            setUser(user);
        });

        socket.on('updateUsers', ({ users }) => {
            setUsers(users);
        });

        socket.on('setPlayer', ({ player }) => {
            setPlayer(player);
        });

        socket.on('updateBid', ({ bid, bidder }) => {
            setBidder(bidder);
            setBid(bid);
        });
    });

    useEffect(() => {
        if(user.admin)
            socket.emit('setPlayer', { player });
    }, [player, user.admin]);

    useEffect(() => {
        if(user.name === bidder)
            socket.emit('updateBid', { bid, bidder });
    }, [bidder, bid, user.name]);

    useEffect(() => {
        if(user.status === false)
            socket.emit('passBid');
    }, [user.status]);

    useEffect(() => {   
        return () => {
            socket.close();
        }
    }, []);

    return (
        <div className="clearfix">
            <div className="adOuterContainer">
                <div className="adInnerContainer">
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                    <ins className="adsbygoogle"
                        style={{display: 'block'}}
                        data-ad-client="ca-pub-4076825572689350"
                        data-ad-slot="7855523265"
                        data-ad-format="auto"
                        data-full-width-responsive="true"></ins>
                    <script>
                        (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
                </div>
            </div>
            <Interface 
                users = { users }
                currentplayer = {
                    <CurrentPlayer 
                        setPlayer = { setPlayer }
                        player = { player }
                        user = { user }
                    />
                }
                currentbid = {
                    <CurrentBid
                        bid = { bid }
                        bidder = { bidder }
                    />
                }
            />
            <Userpanel 
                user = { user }
                bid = { bid }
                setBid = { setBid }
                setBidder = { setBidder }
                player = { player }
                setUser = { setUser }
                bidder = { bidder }
            />
        </div>
    );
}

export default Lobby;