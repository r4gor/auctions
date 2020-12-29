import React, { useState } from 'react';

const CurrentPlayer = ({ setPlayer, player, user }) => {
    const [tempPlayer, setTempPlayer] = useState('');

    return (
        <div className="player">
            <div className="playerInnerContainer">
                {player ?
                    <p className="userText">{player}</p>
                    : <p className="infoText">Admin is deciding...</p>
                }
                {user.admin && !player ?
                    <div>
                        <input
                            className="form-control-sm bg-dark text-light"
                            type="text"
                            onChange={(e) => setTempPlayer(e.target.value)}
                        />
                        <button 
                            className = "btn btn-sm btn-outline-secondary btn-block shadow-none mt-2" 
                            type = "button"
                            onClick = {
                                e => (!tempPlayer) ? e.preventDefault() : (
                                    setPlayer(tempPlayer)
                                )    
                            }
                        >Start</button>
                    </div>
                    : null
                }
            </div>
        </div>
    )
}

export default CurrentPlayer;