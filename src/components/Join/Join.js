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
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div>
                    <input placeholder="Name" className="joinInput" type="text" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(e) => setRoom(e.target.value)} />
                </div>
                <div>
                    <input placeholder="Points (max: 10000)" className="joinInput mt-20" type="text" onChange={(e) => setPoints(Math.abs(parseInt(e.target.value)))} />
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
                    <button className="button mt-20" type="submit">Join</button>
                </Link>
                {error ? (
                    <p>{error}</p>
                ) : null}
            </div>
        </div>
    )
}

export default Join;