import React from 'react';


import './Card.scss'

function Card({el, cash}) {
 

    return (
         <div className="cardS__box">
            <div className="cardS__header">
                <div className="cardS__TransithionHash">Transaction Hash</div>
                <div className="cardS__blockNumber"> {el.blockNumber} Block</div>
            </div>
            <div className="cardS__body">
                <a className="cardS__hash" href="https://docs.etherscan.io/api-endpoints/accounts#get-ether-balance-for-a-single-address" target="_blank" >{el.hash}</a>
            </div>
            <div className="cardS__footer">
                <div className="cardS__from">
                    <p>From</p>
                   {el.from.length>20 && <p  className="cardS__from-number" >{el.from.slice(0,8)}...{el.from.slice(-8)}</p>}
                   {el.from.length<20 && <p  className="cardS__from-number" >{el.from}</p>}
                </div>
                <div className="cardS__to">
                    <p>To</p>
                    <p  className="cardS__from-number" >{el.to.slice(0,8)}...{el.to.slice(-8)}</p>
                </div>
                <div className="cardS__cash">
                    <span>{cash}</span> ETH
                </div>
            </div>
        </div>
    );
}

export default Card;