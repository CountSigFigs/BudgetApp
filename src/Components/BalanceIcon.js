import React from 'react';


function BalanceIcon (props){
    return (
        <div className="col-7 col-md-4 text-center mx-auto">
            <i className="fas fa-dollar-sign fa-2x d-inline mr-1"></i>
            <h3 className="d-inline">Balance</h3>
            <span className="d-block icon text-center">{props.balance}</span>
        </div>
    )
}

export default BalanceIcon;

