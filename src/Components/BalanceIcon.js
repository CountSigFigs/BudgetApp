import React from 'react';


function BalanceIcon (props){
    return (
        <div className="col-7 col-md-3 mx-auto text-center mx-auto iconBox p-2 mb-2" style={{color:'#4169E1'}}>
            <h3>Balance</h3>
            <i className="fas fa-dollar-sign fa-2x mr-1"></i>
            <span className="d-block icon text-center">{props.balance}</span>
        </div>
    )
}

export default BalanceIcon;

