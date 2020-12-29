import React from 'react';

const  CurrentBid = ({ bid, bidder }) => {
    return (
        <div className="currentBid">
            <div className="currentBidInnerContainer">
                <h6 className="infoText">Current Bid:</h6>
                <h5 className="userText">{ bid }</h5>
                <h6 className="infoText">by</h6>
                <h5 className="userText">{ bidder }</h5>
            </div>
        </div>
    )
}

export default CurrentBid;