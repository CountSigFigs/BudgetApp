import React from 'react';


function BudgetIcon (props){
    return (
        <div className="col-7 col-md-4 text-center mx-auto">
            <i className="fas fa-money-bill-alt fa-2x d-inline mr-1"></i>
            <h3 className="d-inline">Budget</h3>
            <span className="d-block icon text-center">{props.budget}</span>
        </div>
    )
}

export default BudgetIcon;