import React from 'react';


function BudgetIcon (props){
    return (
        <div className="col-4 col-md-2">
            <i class="fas fa-money-bill-alt fa-2x"></i>
            <h3>Budget</h3>
            <span>{props.budget}</span>
        </div>
    )
}

export default BudgetIcon;