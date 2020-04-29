import React from 'react';


function BalanceIcon (props){
    return (
        <div className="col-4 col-md-2">
            <i className="fas fa-dollar-sign d-block fa-2x"></i>
            <h3>Balance</h3>
            <span className="d-block">{props.balance}</span>
        </div>
    )
}

export default BalanceIcon;

