import React from 'react';


function BudgetIcon (props){
    return (
        <div className="col-7 col-md-3 mx-auto text-center mx-auto iconBox p-2 mb-2" style={{color:'#228B22'}}>
            <h3>Budget</h3>
            <i className="fas fa-money-bill-alt fa-2x mr-1"></i>
            <span className="d-block icon text-center">{props.budget}</span>
        </div>
    )
}

export default BudgetIcon;