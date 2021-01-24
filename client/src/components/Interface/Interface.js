import React from 'react';

import './Interface.css';

const Interface = ({ users, currentplayer, currentbid }) => {
    let ele = [];
    for(let i = 0; i < 20; i++) {
        if(users[i])
            ele.push(
                <div className="user" style={ !users[i].status ? { borderColor: 'red' } : { borderColor: '#46b5d1' } } key={i}>
                    <div className="innerUserContainer">
                        <p className="infoText1">{users[i].name}</p>
                        {users[i].admin ? 
                            <p className="infoText">admin</p> 
                            : null
                        }
                        <p className="userText1">{users[i].current_points}</p>
                        
                    </div>
                </div>
            );
        else
            ele.push(<div className="user" key={i}></div>);
    }
    return (
        <div>
            <div className="tableOuterContainer">
                <div className="tableInnerContainer">
                    {ele.slice(0, 10).map((e) => (e))}
                    {currentplayer}
                    {currentbid}
                    {ele.slice(10).map((e) => (e))}
                </div>
            </div>
        </div>
    )
}

export default Interface;