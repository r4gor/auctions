import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [points, setPoints] = useState();
    
    let error;
    if(location.state && location.state.error)
        error = location.state.error;

    return (
        <div className="row">
            <div className="col-3 d-flex flex-column align-items-center justify-content-center">
                <div className="card shadow bg-dark">
                    <div className="card-header">
                        <h6 className="m-0 font-weight-bold text-info">What is Simple Auctions?</h6>
                    </div>
                    <div className="card-body">
                        <p className="m-0 text-light">
                            <b>Simple Auctions</b> is a web app tool to create and/or participate to simple
                            virtual auctions with virtual points in a simple and innovative way.
                        </p>
                        <br/>
                        <p className="text-light m-0">
                            Built with 💙 by <a className="text-decoration-none text-info" href="https://raulcodes.tk/" target="_blank" rel="noreferrer">Raul</a>
                        </p>
                    </div>
                </div>
                <div className="card shadow bg-dark mt-2">
                    <div className="card-header">
                        <h6 className="m-0 font-weight-bold text-info">Ad</h6>
                    </div>
                    <div className="card-body">
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
            </div>
            <div className="joinOuterContainer col-6 flex-column">
                <h1 className="text-primary m-0">Simple Auctions</h1>
                <div className="joinInnerContainer">
                    <h4 className="heading">Create/Join</h4>
                    <div>
                        <input placeholder="Name" className="joinInput" type="text" onChange={(e) => setName(e.target.value)} />
                        <label>Enter your desired name</label>
                    </div>
                    <div>
                        <input placeholder="Room" className="joinInput mt-1" type="text" onChange={(e) => setRoom(e.target.value)} />
                        <label>Enter the room name you want to create or join</label>
                    </div>
                    <div>
                        <input placeholder="Points (max: 10000)" className="joinInput mt-1" type="text" onChange={(e) => setPoints(Math.abs(parseInt(e.target.value)))} />
                        <label>Enter the quantity of points you want to use in the auction</label>
                    </div>
                    <Link 
                        onClick={e => (!name || !room || !points || points > 10000) ? e.preventDefault() : null} 
                        to={{
                            pathname: `/${room}`,
                            state: {
                                name: `${name}`,
                                points: points
                            }
                        }}
                    >
                        <button className="button mt-1" type="submit">Join</button>
                    </Link>
                    {error ? (
                        <p className="error m-0">{error}</p>
                    ) : null}
                </div>
            </div>
            <div className="col-3 d-flex flex-column align-items-center justify-content-center">
                <div className="card shadow bg-dark">
                    <div className="card-header">
                        <h6 className="m-0 font-weight-bold text-info">How to use Simple Auctions?</h6>
                    </div>
                    <div className="card-body">
                        <p className="m-0 text-light">
                            After inserting <b>name</b>, <b>room</b> and <b>points</b> in their apposite boxes
                            click <b>Join</b>.
                            <br/>
                            <br/>
                            The web app is going to take you inside the room (which can support up to 20 users) 
                            and show you 2 panels:
                            <br/>
                            <br/>
                            <b>the first</b> contains the online users, the current prize and the current bid;
                            <br/>
                            <b>the second</b> is your personal panel which contains buttons to make bids or pass
                            and also contains the bids you have already won;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Join;