import React from 'react';


function ExpenseIcon (props){
    return (
        <div className="col-4 col-md-2">
            <i class="fas fa-money-check fa-2x"></i>
            <h3>Expenses</h3>
            <span>{props.expenses}</span>
        </div>
    )
}

export default ExpenseIcon;

