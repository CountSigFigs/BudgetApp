import React from 'react';


function BalanceIcon (props){
    return (
        <div className="col-4 col-lg-2">
            <i className="fas fa-dollar-sign fa-2x d-inline mr-1"></i>
            <h3 className="d-inline">Balance</h3>
            <span className="d-block icon text-center">{props.balance}</span>
        </div>
    )
}

export default BalanceIcon;

