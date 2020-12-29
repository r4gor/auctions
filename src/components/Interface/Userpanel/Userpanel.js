import { useEffect, useState } from "react";

const Userpanel = ({ user, setBid, bid, bidder, setBidder, player, setUser }) => {
    let [counter, setCounter] = useState(15);

    useEffect(() => {
        let timeout;
        if(player && user.status === true) {
            if(user.name !== bidder) {
                timeout = setTimeout(() => {
                    timeout = setCounter(counter -1)
                }, 1000);
                if(counter === 0) {
                    setUser({...user, status: false});
                    setCounter(15);
                }
            }
            else {
                setCounter(15);
            }
        }
        else {
            setCounter(15);
        }
        return () => clearTimeout(timeout);
    }, [bidder, counter, player, setUser, user]);

    return (
        <div className="panelOuterContainer">
            <div className="panelInnerContainer">
                {user ? 
                    (<p className="topleft mdText userText1">{user.name} <span className="userText">{counter}</span></p>)
                    : null
                }
                {user ? 
                    (<p className="topright mdText userText1">Points: {user.current_points}</p>)
                    : null
                }
                <div className="container">
                    {user.status ?
                        <div className="row justify-content-center">
                            <button 
                                className="col-2 me-md-3 btn btn-sm btn-success btn-block shadow-none infoText1"
                                onClick = {
                                    e => (!player || bid > user.current_points) ? 
                                        (e.preventDefault()) :
                                        (
                                            setBidder(user.name),
                                            setBid(bid+1)
                                        )
                                }
                            >Bid +1</button>

                            <button 
                                className="col-2 me-md-3 btn btn-sm btn-success btn-block shadow-none infoText1"
                                onClick = {
                                    e => (!player || bid > user.current_points) ? 
                                        (e.preventDefault()) :
                                        (
                                            setBidder(user.name),
                                            setBid(bid+5)
                                        )
                                }
                            >Bid +5</button>

                            <button 
                                className="col-2 btn btn-sm btn-danger btn-block shadow-none infoText1"
                                onClick = { e => (!player || user.name === bidder) ? 
                                    (e.preventDefault()) :
                                    (
                                        setUser({...user, status: false}),
                                        setCounter(15)
                                    )
                                }
                            >Pass</button>
                        </div>
                        : null
                    }
                </div>
                <div className="subpanelContainer">
                    <p className="topleft smText infoText1">Won bids:</p>
                    <ul className="userText smText">
                        {user && (typeof user.players !== 'undefined') ? user.players.map((p) => (
                            <li key={p}>{p}</li>
                        )) : null}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Userpanel;